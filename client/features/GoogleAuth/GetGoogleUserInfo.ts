const GetGoogleUserInfo = async (accessToken: string) => {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        return Error('Failed to fetch user info');
    }


    return await response.json();
};

export { GetGoogleUserInfo };