import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import "./productManager.scss";
import ProductManagerList from "../../layouts/ProductManagerList";
import imgTest1 from "../../../assets/images/shop.png";
import { fetchAllProduct } from "./../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const dataList = [
    {
        id: 0,
        image: imgTest1,
        nameProduct: "Lenovo IdeaPad 3 15 (Intel Gen 11)",
        infor: "Vi xử lý: Intel Core i5 11400H, 6 nhân / 12 luồng Màn hình: 15.6 FullHD IPS 144Hz (1920 x 1080), màn nhám Độ phủ màu: 65% sRGB",
        shopName: "FA shop",
        location: "Hà nội",
        rate: 5,
        createAt: new Date(2021, 10, 30, 10, 20, 20),
    },
    {
        id: 1,
        image: imgTest1,
        nameProduct: "Levevo ideapad gaming 3",
        infor: "Dong máy mới nhất của levo sử dụng dòng chip mới nhất đến từ intel",
        shopName: "FA shop",
        location: "Hà nội",
        rate: 5,
        createAt: new Date(2021, 10, 30, 10, 20, 20),
    },
    {
        id: 2,
        image: imgTest1,
        nameProduct: "Lenovo IdeaPad 3 15 (Intel Gen 11)",
        infor: "Dong máy mới nhất của levo sử dụng dòng chip mới nhất đến từ intel",
        shopName: "FA shop",
        location: "Hà nội",
        rate: 5,
        createAt: new Date(2021, 10, 30, 10, 20, 20),
    },
    {
        id: 3,
        image: imgTest1,
        nameProduct: "Levevo ideapad gaming 3",
        infor: "Dong máy mới nhất của levo sử dụng dòng chip mới nhất đến từ intel",
        shopName: "FA shop",
        location: "Hà nội",
        rate: 5,
        createAt: new Date(2021, 10, 30, 10, 20, 20),
    },
];

export default function Detail() {
    const dispatch = useDispatch();
    const fetchProducts = () => {
        dispatch(fetchAllProduct());
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const all_product_datas = useSelector((state) => state.product.all_product);

    console.log(all_product_datas);

    return (
        <div id="productManagerContainer">
            <div className="product-handler">
                <h3>エクスポート↓</h3>
                <div>
                    <Link to="/product/create">
                        <Button
                            className="btn-action"
                            variant="contained"
                            color="primary"
                            style={{ marginRight: 30 }}
                        >
                            <i className="fas fa-plus-circle icon-btn"></i>
                            新しい商品を追加
                        </Button>
                    </Link>
                    <Button
                        className="btn-action"
                        variant="contained"
                        color="secondary"
                    >
                        <i className="fas fa-filter icon-btn"></i>
                        フィルター
                    </Button>
                </div>
            </div>
            <div className="product-list">
                <ProductManagerList dataList={all_product_datas} />
            </div>
        </div>
    );
}
