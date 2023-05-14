const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var ip = require("ip");

export default (req, res) => {
  const contactData = req.body;
  try {
    const msg = {
      to: "influencers@rox.games", // Change to your recipient
      from: "influencers@rox.games", // Change to your verified sender
      subject: "Rox Contact",
      html: `<strong>FirstName : ${req.body.firstName} <br/>
        lastName :${req.body.lastName}<br/>
        Birthday :${req.body.birthday}<br/>
        Email :${req.body.email} <br/>
        ChannelName : ${req.body.channelName}<br/>
        Youtube :${req.body.youtube}<br/>
        TikTok :${req.body.tikTok}<br/>
        Instagram :${req.body.instagram}<br/>
        Category :${req.body.category}<br/>
        AdditionalInformation :${req.body.additionalInformation}<br/>
        PickPlan :${req.body.pickPlan}</strong>`,
    };
    sgMail.send(msg).then((data) => {
      res.send({ message: "Email Sent Successfully", status: true });
    });
  } catch (err) {
    res.send(JSON.stringify(err));
  }
};
