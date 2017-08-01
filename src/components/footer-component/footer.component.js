import React, { Component } from 'react';
import './footer.component.css';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer-container">
                <div className="back-to-top">
                    <a href="" className="back-to-top-btn">Back to top</a>
                </div>
                <div className="links-top-container">
                    <table className="footer-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="links-top-title">Get to Know Us</div>
                                    <ul className="footer-link-list">
                                        <li className="footer-link"><a href="">Carrers</a></li>
                                        <li className="footer-link"><a href="">About Amazon</a></li>
                                        <li className="footer-link"><a href="">Investor Relations</a></li>
                                        <li className="footer-link"><a href="">Amazon Devices</a></li>
                                    </ul>
                                </td>
                                <td className="footer-link-spacing"></td>
                                <td>
                                    <div className="links-top-title">Make Money with Us</div>
                                    <ul className="footer-link-list">
                                        <li className="footer-link">
                                            <a href="">Sell on Amazon</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Sell Your Services on Amazon</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Sell on Amazon Business</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Sell your apps on Amazon</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Become an Affiliate</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Advertise Your Products</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Self-Publish with Us</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Become an Amazon Vendor</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Sell Your Subscription on Amazon</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href=""><span><i className="fa fa-caret-right"></i></span>&nbsp; See all</a>
                                        </li>
                                    </ul>
                                </td>
                                <td className="footer-link-spacing"></td>
                                <td>
                                    <div className="links-top-title">
                                        Amazon Payment Products
                                    </div>
                                    <ul className="footer-link-list">
                                        <li className="footer-link">
                                            <a href="">Amazon Rewards Visa Signature Cards</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Amazon.com Store Card</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Amazon.com Corporate Credit Line</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Shop with Points</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Credit Card Marketplace</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Reload Your Balance</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Amazon Currency Converter</a>
                                        </li>
                                    </ul>
                                </td>
                                <td className="footer-link-spacing"></td>
                                <td>
                                    <div className="links-top-title">Let Us Help You</div>
                                    <ul className="footer-link-list">
                                        <li className="footer-link">
                                            <a href="">Your Account</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Your Orders</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Shipping Rates & Policies</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Amazon Prime</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Returns & Replacements</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Manage Your Content and Devices</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Amazon Assistant</a>
                                        </li>
                                        <li className="footer-link">
                                            <a href="">Help</a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bottom-footer-top">
                    <div className="amz-logo-container">
                        <div className="amz-logo"><img src="" alt="amazon-logo"/></div>
                        <div className="language-btn"><span><i className="fa fa-globe"></i></span>&nbsp; English</div>
                        <div className="country-btn"><span className="country-img">img</span>United States</div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default FooterComponent;