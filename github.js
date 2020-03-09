class Github {
  constructor() {
    this.client_id = 'bbcf552bbffbdfeb86f3';
    this.client_secret = 'f747b65a4e60e3f8b8549dd4b332bcbb3f506052';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
