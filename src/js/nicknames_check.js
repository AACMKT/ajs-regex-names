export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const regex = /^([a-z]+)([a-z_-]{1}||[a-z_-]{1}\d{0,3})*([a-z]+)$/i;
    return regex.test(this.nickname);
  }
}
