
const baseUrl = 'https://nextjsacceleratorauth.appskeeper.in/v1/';

const authorization = `Basic ${btoa('RCC_USR:RCC_PWD')}`;

const headers = (): { [key: string]: string } => {
    return {
        'Content-type': 'application/json',
        'Accept-Language': 'en',
        'Timezone': 'Asia/kolkata',
        'Platform': '1',
        'Device-Token': "qwertyuiop",
        "Authorization": authorization
    }
}

const apiResponse = async (url: string, request: { [key: string]: string }): Promise<any> => {
    const data = await fetch(url, {
        headers: headers(),
        ...request
    })
    const res = await data.json()
    if (data.status.toString().startsWith('4') || data.status.toString().startsWith('5')) {
        console.log(res)
        return;
    }
    return res;
}

export const httpPost = async (
    url: string,
    body: { [key: string]: any },
): Promise<any> => {
    try {
        return apiResponse(`${baseUrl}${url}`,
            {
                method: 'POST',
                body: JSON.stringify(body)
            }
        );

    } catch (error) {
        console.log('Error + ', error);
    }
}


export const httpGet = async (
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
        return apiResponse(`${baseUrl}${url}${paramsString}`,
            {
                method: "GET",
            }
        );
    } catch (error) {
        console.log('Error + ', error);
    }
}