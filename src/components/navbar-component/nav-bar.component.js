import React, { Component } from 'react';
import './nav-bar.css'

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedin: false,
            navbarMsg: 'Shop for thousands of deals',
            cartItems: 0
        }
    }
    render() {
        return (
            <div className="nav-bar-container">
                <nav className="nav-bar">
                    <div className="nav-top">
                        <div className="nav-logo-container">
                            <div className="nav-logo"><span className="logo-link-span"><a href="" className="logo-link">Try Prime</a></span></div>
                        </div>
                        <div className="search-bar-container">
                                <select className="nav-search-dropdown searchSelect"  data-nav-selected="0" id="searchDropdownBox" name="url" tabIndex="18" title="Search in">
                                    <option defaultValue="search-alias=aps">All Departments</option>
                                    <option value="search-alias=alexa-skills">Alexa Skills</option>
                                    <option value="search-alias=amazon-devices">Amazon Devices</option>
                                    <option value="search-alias=instant-video">Amazon Video</option>
                                    <option value="search-alias=warehouse-deals">Amazon Warehouse Deals</option>
                                    <option value="search-alias=appliances">Appliances</option>
                                    <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                                    <option value="search-alias=arts-crafts">Arts, Crafts &amp; Sewing</option>
                                    <option value="search-alias=automotive">Automotive Parts &amp; Accessories</option>
                                    <option value="search-alias=baby-products">Baby</option>
                                    <option value="search-alias=beauty">Beauty &amp; Personal Care</option>
                                    <option value="search-alias=stripbooks">Books</option>
                                    <option value="search-alias=popular">CDs &amp; Vinyl</option>
                                    <option value="search-alias=mobile">Cell Phones &amp; Accessories</option>
                                    <option value="search-alias=fashion">Clothing, Shoes &amp; Jewelry</option>
                                    <option value="search-alias=fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                                    <option value="search-alias=fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                                    <option value="search-alias=fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                                    <option value="search-alias=fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                                    <option value="search-alias=fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                                    <option value="search-alias=collectibles">Collectibles &amp; Fine Art</option>
                                    <option value="search-alias=computers">Computers</option>
                                    <option value="search-alias=courses">Courses</option>
                                    <option value="search-alias=financial">Credit and Payment Cards</option>
                                    <option value="search-alias=digital-music">Digital Music</option>
                                    <option value="search-alias=electronics">Electronics</option>
                                    <option value="search-alias=gift-cards">Gift Cards</option>
                                    <option value="search-alias=grocery">Grocery &amp; Gourmet Food</option>
                                    <option value="search-alias=handmade">Handmade</option>
                                    <option value="search-alias=hpc">Health, Household &amp; Baby Care</option>
                                    <option value="search-alias=local-services">Home &amp; Business Services</option>
                                    <option value="search-alias=garden">Home &amp; Kitchen</option>
                                    <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                                    <option value="search-alias=digital-text">Kindle Store</option>
                                    <option value="search-alias=fashion-luggage">Luggage &amp; Travel Gear</option>
                                    <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                                    <option value="search-alias=magazines">Magazine Subscriptions</option>
                                    <option value="search-alias=movies-tv">Movies &amp; TV</option>
                                    <option value="search-alias=mi">Musical Instruments</option>
                                    <option value="search-alias=office-products">Office Products</option>
                                    <option value="search-alias=lawngarden">Patio, Lawn &amp; Garden</option>
                                    <option value="search-alias=pets">Pet Supplies</option>
                                    <option value="search-alias=prime-exclusive">Prime Exclusive</option>
                                    <option value="search-alias=pantry">Prime Pantry</option>
                                    <option value="search-alias=software">Software</option>
                                    <option value="search-alias=sporting">Sports &amp; Outdoors</option>
                                    <option value="search-alias=tools">Tools &amp; Home Improvement</option>
                                    <option value="search-alias=toys-and-games">Toys &amp; Games</option>
                                    <option value="search-alias=vehicles">Vehicles</option>
                                    <option value="search-alias=videogames">Video Games</option>
                                    <option value="search-alias=wine">Wine</option>
                            </select>
                            <input id="search-bar" type="text"/>
                            <button id="search-btn"><span className="search-icon"><i className="fa fa-search"></i></span></button>
                        </div> {/*<!-- end of search-bar container -->*/}
                        <div className="top-nav-promo">{this.state.navbarMsg}</div>
                    </div> {/*<!-- end of nav-top -->*/}
                    
                    <div className="nav-bottom">
                        <div className="dp-container">
                            <div className="dp-btn">Departments &nbsp;<span><i className="fa fa-caret-down"></i></span></div>
                        </div>
                        <div className="bottom-nav-link">
                            <a href="" className="link-1">Your Amazon.com</a>&nbsp;
                            <a href="" className="link-2">Today's Deal</a>
                            <a href="" className="link-2">Gift cards & Registry</a>
                            <a href="" className="link-2">Sell</a>
                            <a href="" className="link-2">Help</a>
                        </div>
                        <div className="language-container">
                            <div className="language">
                                <span className="lang-text">EN</span>
                                <div><i className="fa fa-globe"></i><span className="wd"><i className="fa fa-caret-down"></i></span></div>
                                
                            </div>
                        </div>
                        <div className="nav-separator-container">
                            <div className="nav-bottom-link-separator"></div>
                        </div>
                        <div className="account-list-container">
                            <div className="account-top-title">{this.state.isLoggedin === false? 'Hello. Sign in': 'Welcome back!'}</div>
                            <div className="account-bottom-title">Account & Lists &nbsp;<span><i className="fa fa-caret-down"></i></span></div>
                        </div>
                        <div className="orders-btn">
                            <div className="orders-text">Orders</div>
                        </div>
                        <div className="try-prime-btn">
                            <div className="try-prime-text">Try Prime &nbsp; <span><i className="fa fa-caret-down"></i></span></div>
                        </div>
                        <div className="cart-container">
                            <div className="cart-img"></div>
                                <span className="cart-text">Cart</span>
                                <span className="cart-quantity">{this.state.cartItems}</span>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    
}

export default Navbar;