export const getLopHocByNganhHoc = async (nganhHoc, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get('lophoc/nganhhoc', {
            params: {
                nganhId: nganhHoc,
            },
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (!!res) {
            return res.data;
        } else return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};