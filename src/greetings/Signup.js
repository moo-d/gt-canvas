const Canvas = require("canvas");

module.exports = class Signup {
  constructor() {
    this.bg = "https://i.ibb.co/PtrY9pp/IMG-20210623-154538-171.jpg";
    this.avatar = "https://i.ibb.co/G5mJZxs/rin.jpg";
    this.assent = "https://i.ibb.co/0Fc6bB8/20210727-185801.png";
    this.name = "mutz";
    this.email = "linz@notfoundsquad.com";
  }
  setAvatar(value) {
    this.avatar = value;
    return this;
  }
  setBackground(value) {
    this.bg = value;
    return this;
  }
  setName(value) {
    this.name = value;
    return this;
  }
  setEmail(value) {
    this.email = value;
    return this;
  }
  async toAttachment() {
    const canvas = Canvas.createCanvas(800, 400);
    const ctx = canvas.getContext("2d");
    let background = await Canvas.loadImage(this.bg);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
    let b = await Canvas.loadImage(this.assent);
    ctx.drawImage(b, 0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "black";
    ctx.rect(70, 137, 170, 170);
    ctx.stroke();
    let pp = await Canvas.loadImage(this.avatar);
    ctx.drawImage(pp, 70, 137, 170, 170);
    ctx.globalAlpha = 1;
    ctx.font = "bold 60px Courier New";
    ctx.fillStyle = "black";
    ctx.textAlign = 'left';
    let usr = this.name
    let name = usr.length > 10 ? usr.substring(0, 10) + "..." : usr;
    ctx.fillText(name, 290, 195);
    ctx.globalAlpha = 1;
    ctx.font = "bold 35px Courier New";
    ctx.fillStyle = "black";
    ctx.textAlign = 'left';
    let lop = this.email
    let nami = lop.length > 19 ? lop.substring(0, 19) + "..." : lop;
    ctx.fillText(nami, 339, 305);
    return canvas;
  }
};
