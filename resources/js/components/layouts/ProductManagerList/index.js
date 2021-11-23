import React from "react";
import { Grid, Button } from "@material-ui/core";
import Item from "./ProductIManagerItem";
import "./productManagerList.scss";

export default function ProductList({ dataList }) {
    return (
        <div className="listContainer">
            <Grid container alignItems="stretch" spacing={1}>
                {dataList.map((data) => (
                    <Grid key={data.id} item xs={12} md={6}>
                        <Item data={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
