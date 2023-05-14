const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY_CONTACT);
var ip = require("ip");

export default (req, res) => {
  const contactData = req.body;
  try {
    const msg = {
      to: "hello@rox.games", // Change to your recipient
      from: "hello@rox.games", // Change to your verified sender
      subject: "Rox Contact",
      html: `<strong>Name : ${req.body.Name} <br/>
                  Email :${req.body.Email}<br/>
                  Interested :${req.body.Interested}<br/>
                  Message :${req.body.Message} <br/>
                  IPaddres : ${ip.address()}</strong>`,
    };
    sgMail.send(msg).then((data) => {
      res.send({ message: "Email Sent Successfully", status: true });
    });
  } catch (err) {
    res.send(JSON.stringify(err));
  }
};
