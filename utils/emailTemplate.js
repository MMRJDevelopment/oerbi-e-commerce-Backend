function emailTemplate(token) {
  return `<div style=background-color:#f5f5f3;height:400px;width:800px><a href=https://imgbb.com/ ><img alt=Logo-1 src=https://i.ibb.co/DGXrr3W/OREBI.png style=height:30px;margin-top:20px;margin-left:30px></a><div style=background-color:#262626;height:2px;width:700px;margin-top:20px;margin-left:30px><h1 style=padding-top:20px>Hello,</h1><h2>Please click the button below to verify your email assress.</h2><p>Ifyou didn't make this request,<samp>click here</samp> to cancel.<p>Thanks,<p>Cloud Shop</p><a href="http://localhost:9000/api/v1/authentication/verification/${token}" style="font-family:'DM Sans',sans-sherif;font-size:20px;color:#ffff;padding:10px 20px 10px 20px;background:#262626;text-decoration:none;border:none;display:inline-block;border-radius:10px">verify</a></div></div>`;
}
module.exports = emailTemplate;
