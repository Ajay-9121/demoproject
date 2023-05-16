import * as React from "react";
import "../../index.css";
// import logofooter from "../../images/logo-footer.svg";
// import facebook from "../../images/facebook.svg";
// import instagram from "../../images/instagram.svg";
// import twitter from "../../images/twitter.svg";
// import youtube from "../../images/youtube.svg";
// import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

const Footer = (props: any) => {
	
	const linkDoms = props._site.c_headerMenu.menu.map((link:any) => (
		<div className="header-link" key={link.label}>
		  <a href={link.url} >
			{link.label}
		  </a>
		</div>
	  ));

	
	  const social=props._site.c_socialicon.socialicon.map((index:any)=>{
		return(
			<>
			<img className="media-icon" src={index.url} alt="" height={40} width={40}/>
			</>
		)
	})

	
	const payment=props._site.c_paymentGetway.payment.map((list:any)=>{
		return(
			<>
			<img className="media-icon" src={list.url} alt="" height={40} width={40}/>
			</>
		)
	})

	return (
		<>

			<footer className="site-footer">

				<div className="container">

					<div className="store-locator">
					<div className="company-logo mr-4">
							<img src={props._site.c_footer.footerlogo.url} height={55} width={120}/>
							</div>
					</div>
					

					<div className="link-sec-footer ">
					
						<div className="footer-block">
							<h4 className="footer-block-title">services</h4>
							<ul className="list-none">
								<li>{linkDoms }</li>
							</ul>
						</div>
						
						<div className="footer-block">
							<h4 className="footer-block-title">about link</h4>
							<ul className="list-none">
								<li>{linkDoms }</li>
								
							</ul>
						</div>
						
						<div className="footer-block">
							<h4 className="footer-block-title">Follow us</h4>
							<ul className="list-none">
							<li className="social-icon">{social}</li>
							
							</ul>
						</div>
						<div className="payment-icon">
						<ul className="social-media-bx">
							
						{payment}
						</ul>
						</div>

					</div>
					

				</div>

			</footer>
{/* 
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
					.
				</p>
			</CookieConsent> */}
		</>
	);
};

export default Footer;
function handleMediaQueryChange(mediaQuery: MediaQueryList) {
	throw new Error("Function not implemented.");
}

