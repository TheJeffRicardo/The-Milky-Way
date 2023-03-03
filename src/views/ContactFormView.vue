<template>
    <section id="contact">
        <div class="contact container-fluid">
        <h1 class="colorpurple">Contact Us</h1>
        <div class="row">
        </div>
        <div class="row">
                <h4 style="text-align:center">I'd love to hear from you!</h4>
        </div>
        <form action="https://formspree.io/f/mnqrvwql" method="POST">
            <div class="row input-container">
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <input type="text" name="fname" required />
                        <label>FullName</label> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                        <input type="text" name="email" required />
                        <label>Email</label> 
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="styled-input" style="float:right;">
                        <input type="number" required />
                        <label>Phone Number</label> 
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <textarea name="message" required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <input type="submit" class="submit" value="Submit">
                </div>
            </div>
        </form>
    </div>
</section>
</template>

<script>
export default {
  name: 'con-tact'
}
</script>

<style scoped>
.contact{
    margin-top: -15%;
}
h1{
    width: 85vw;
    margin: auto;
}
.colorpurple {
    animation: heading2 5s infinite;
    animation-direction: alternate;
}
.submit:hover {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid #2d2d2d;
    transition: 0.5s;
    color: #2d2d2d;
    font-weight: bold;
}
.contact h1 {
    font-family: none;
    font-size: 72px;
    text-align: center;
}
.contact h4 {
    font-family: Pacifico;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    line-height: 1.5;
}
input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}

.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}

.styled-input label {
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
}

.styled-input.wide { 
    width: 650px;
    max-width: 100%;
}

input,
textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
}

input:focus,
textarea:focus { outline: 0; }

input:focus ~ span,
textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
}

textarea {
    width: 100%;
    min-height: 15em;
}

.input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
}
input[type=checkbox] + label {
    color: #ccc;
    font-style: italic;
} 
  
input[type=checkbox]:checked + label {
    color: #f00;
    font-style: normal;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
.contact h4 {
    font-weight: 400;
    font-size: 15px;
}
.styled-input {
    width: 247px;
}
}
@media screen and (min-width: 450px) and (max-width: 720px) {
    .contact h4 {
        font-size: 25px;
    }
    .styled-input {
        width: 397px;
    }
}
@media screen and (min-width: 720px) and (max-width: 768px) {
    
.styled-input {
    width: 625px;
}
}
 
 
  @keyframes heading2 {
    25%{
        box-shadow: 10px 2px 10px 1px #2d2d2d;
    }
    50%{
        box-shadow: 0px 7px 10px 1px #2d2d2d;
    }
    75%{
        box-shadow: -10px 2px 10px 1px #2d2d2d;
    }
    100%{
        box-shadow: 0px -7px 10px 1px #2d2d2d;
    }
  }
</style>