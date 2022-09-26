import React from 'react';
import Screen from "../components/Screen"
import Card from "../components/Card"

function ListingsScreen(props) {
    return (
        <Screen>
            <Card image={require("../assets/jacket.jpg")} title="Red Jacket For Sale" subTitle="$100"/>
            <Card image={require("../assets/jacket.jpg")} title="Red Jacket For Sale" subTitle="$100"/>
        </Screen>
    );
}

export default ListingsScreen;