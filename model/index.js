// Database configurations
const db = require('../config');
//bcrypt module
const { hash, compare, hashSync } = require('bcrypt');
//middleware for creating tokens
const { createToken} = require('../middleware/AuthenthicatedUser')
// User 
class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const tr = 
        `
        SELECT firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        db.query(tr, async (err, data)=>{
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
                                err: 'Password incorrect or did not register.'
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const tr = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
        FROM Users;
        `;
        //database
        db.query(tr, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const tr = 
        `
        SELECT userID, firstName, lastName, gender, cellphoneNumber, emailAdd, userRole, userProfile, joinDate
        FROM Users
        WHERE userID = ?;
        `;
        //database
        db.query(tr,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        try {
          // Payload
          var init = req.body;
          // Hashing user password
          init.userPass = await hash(init.userPass, 12);
          // For authentication
          let user = {
            emailAdd: init.emailAdd,
            userPass: init.userPass
          };
          // SQL query
          const tr = `INSERT INTO Users SET ?;`;
          await db.query(tr, [init]);
          // Create a token
          const jwToken = createToken(user);
          // This token will be saved in the cookie
          // The duration is in milliseconds.
          res.cookie("LegitUser", jwToken, {
            maxAge: 3600000,
            httpOnly: true
          });
          res.status(200).json({ message: "A user record was saved." });
        } catch (err) {
          res.status(401).json({ err });
        }
      }
      
      async updateUser(req, res) {
        try {
          const { userID, bag } = req.body;
          if (bag.userPass) {
            bag.userPass = await hashSync(bag.userPass, 12);
          }
          await db.query('UPDATE Users SET ? WHERE userID = ?', [bag, userID]);
          res.status(200).json({ message: 'A row was affected' });
        } catch (err) {
          res.status(500).json({ message: 'An error occurred while updating the user', error: err });
        }
      }
      
    deleteUser(req, res) {
        const tr = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //database
        db.query(tr,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {message: 
                "A user was removed from a database"} );
        })    
    }
}
// Product
class Product {
    fetchProducts(req, res) {
        const tr = `SELECT prodID, prodName, categories, price, size, imgURL, userID
        FROM products;`;
        db.query(tr, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const tr = `SELECT prodID, prodName, categories, price, size, imgURL, userID
        FROM products
        WHERE prodID = ?;`;
        db.query(tr, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const tr = `
        INSERT INTO products
        SET ?;`;
        db.query(tr,[req.body], (err)=> {
            if(err){
                res.status(400).json({err})
            } else {
                res.status(200).json({message: "An item was added."})
            }
        })
    }
    
    updateProduct(req, res) {
        const tr = 
        `
        UPDATE products
        SET ?
        WHERE prodID = ?
        `;
        db.query(tr,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a item."});
                }else {
                    res.status(200).json({message: "Item is  updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const tr = 
        `
        DELETE FROM products
        WHERE prodID = ?;
        `;
        db.query(tr,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The item was not found."});
            res.status(200).json({message: "An item was deleted."});
        })
    }

}
// Export User class
module.exports = {
    User, 
    Product
}