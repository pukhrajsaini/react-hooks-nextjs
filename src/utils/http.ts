


const baseUrl = 'https://nextjsacceleratorauth.appskeeper.in/';

const headers = (): { [key: string]: string } => {
    return {
        'Content-type': 'application/json',
        'Accept-Language': 'en',
        'Timezone': 'Asia/kolkata',
        'Platform': '1',
        'Device-Token': "qwertyuiop",
    }
}


const httpPost = async (
    url: string,
    body: { [key: string]: any },
): Promise<any> => {
    try {
        const data = await fetch(
            `${baseUrl}${url}`,
            {
                method: 'POST',
                headers: headers(),
                body: JSON.stringify(body)
            });

        return await data.json();;
    } catch (error) {

    }
}


const httpGet = async (
    url: string,
    params?: { [key: string]: string | number | boolean },
): Promise<any> => {
    try {
        let paramsString = '';
        if (params && Object.keys(params).length) {
            Object.keys(params).forEach((key: string, i: number) => {
                if (params[key]) {
                    if (i = 0) paramsString = `?${key}=${params[key]}`;
                    else paramsString = paramsString + `&${key}=${params[key]}`;
                }
            });
        }

        const data = await fetch(
            `${baseUrl}${url}${paramsString}`,
            {
                method: "GET",
            }
        );

        return await data.json();
    } catch (error) {

    }
}