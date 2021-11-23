import axios from "axios";
import { setCookie, getCookie } from "../../utils/cookie";
import { toast } from "react-toastify";
const apiProduct = "http://127.0.0.1:8000/api/product/";

const GET_PRODUCT_RECOMMEND = "GET_PRODUCT_RECOMMEND";
const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (id) => async (dispatch) => {
    await axios
        .post(`${apiProduct}${id}/delete`)
        .then((res) => {
            toast.success("Xóa sản phẩm thành công!");
            dispatch(fetchAllProduct());
        })
        .catch((error) => {
            toast.error("Xóa sản phẩm không thành công!");
            console.error(error);
        });
};

export const fetchAllProduct = () => async (dispatch) => {
    await axios
        .get(`${apiProduct}`)
        .then((res) => {
            const get_all_product = res.data.data;
            dispatch(setAllProduct(get_all_product));
        })
        .catch((error) => {
            console.error(error);
            dispatch(setAllProduct(null));
        });
};

export const setAllProduct = (products) => {
    return { type: GET_ALL_PRODUCT, payload: products };
};

export const fetchProductRecommend = () => async (dispatch) => {
    await axios
        .get(`${apiProduct}recommend`)
        .then((res) => {
            const get_product_recommend = res.data.data;
            dispatch(setProductRecommend(get_product_recommend));
        })
        .catch((error) => {
            console.error(error);
            dispatch(setProductRecommend(null));
        });
};

export const setProductRecommend = (products) => {
    return { type: GET_PRODUCT_RECOMMEND, payload: products };
};
