// Database configurations
const db = require('../config');
//bcrypt module
const { hash, compare, hashsync } = require('bcrypt');
//middleware for creating tokens
const { createToken} = require('../middleware/AuthenthicatedUser')
// User 
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry = 
        `
        SELECT firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        db.query(strQry, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You provide a wrong email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;
                        // Create a token
                        const jwToken = 
                        createToken(
                            {
                                emailAdd, userPass  
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'Invalid password or did not register. '
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
        FROM Users;
        `;
        //db
        db.query(strQry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
        FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        // Payload
        let detail = req.body;
        // Hashing user password
        detail.userPass = await 
        hash(detail.userPass, 12);
        // This information will be used for authentication.
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }
        // sql query
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        db.query(strQry, [detail], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                // Create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({message: "A user record was saved."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 12);
        const strQry = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {message: 
                "A row was affected"} );
        })    
    }
    deleteUser(req, res) {
        const strQry = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //db
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {message: 
                "A record was removed from a database"} );
        })    
    }
}
// Product
class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT prodID, prodName, price, size, imgURL
        FROM products;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT prodID, prodName, price, size, imgURL
        FROM products
        WHERE prodID = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO products
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({message: "Product saved"});
                }
            }
        );    

    }
    updateProduct(req, res) {
        const strQry = 
        `
        UPDATE products
        SET ?
        WHERE prodID = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({message: "Product updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const strQry = 
        `
        DELETE FROM products
        WHERE prodID = ?;
        `;
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found."});
            res.status(200).json({message: "A product was deleted."});
        })
    }

}
// Export User class
module.exports = {
    User, 
    Product
}