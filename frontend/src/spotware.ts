export const spotware = {
  oauth2: {
    auth: process.env.REACT_APP__SPOTWARE__AUTH_URI as string,
    clientId: process.env.REACT_APP__SPOTWARE__CLIENT_ID as string,
    redirect: process.env.REACT_APP__SPOTWARE__REDIRECT_URI as string,
    scope: process.env.REACT_APP__SPOTWARE__SCOPE as string,
    token: process.env.REACT_APP__SPOTWARE__TOKEN_URI as string
  },
  auth() {
    const clientId = encodeURI(this.oauth2.clientId);
    const redirectUri = encodeURI(this.oauth2.redirect);
    const scope = encodeURI(this.oauth2.scope);
    return `${
      this.oauth2.auth
    }?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  }
};
