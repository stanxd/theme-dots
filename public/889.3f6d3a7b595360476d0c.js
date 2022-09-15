/*! For license information please see 889.3f6d3a7b595360476d0c.js.LICENSE.txt */
"use strict";(self.webpackChunkTheme_Raed=self.webpackChunkTheme_Raed||[]).push([[889],{4901:(t,e,s)=>{s.d(e,{H:()=>a}),salla.event.setMaxListeners(20);class r extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var s;return null===(s=this.getElement(t))||void 0===s?void 0:s.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const a=new r},7889:(t,e,s)=>{s.r(e),s.d(e,{salla_rating_stars:()=>n});var r=s(6298),a=s(4901),i=s(9964);const n=class{constructor(t){(0,r.r)(this,t),this.name="rating",this.size="medium"}initiateRating(){this.host.addEventListener("click",(()=>{if(!this.startsElem)return;let t=this.startsElem.querySelectorAll(".s-rating-stars-hovered"),e=t[t.length-1];if(!e)return;let s=e.getAttribute("data-star");this.startsElem.querySelector(".rating_hidden_input").value=s,this.startsElem.querySelectorAll(".s-rating-stars-btn-star").forEach(((t,e)=>a.H.toggleElementClassIf(t,"s-rating-stars-selected","s-rating-stars-unselected",(()=>e<parseInt(s))))),this.startsElem.querySelectorAll("[aria-pressed]").forEach((t=>t.removeAttribute("aria-pressed"))),e.setAttribute("aria-pressed","true")}))}highlightSelectedStars(){var t,e;let s="s-rating-stars-hovered",r=null===(t=this.startsElem)||void 0===t?void 0:t.querySelectorAll(".s-rating-stars-btn-star");null==r||r.forEach(((t,e)=>{t.addEventListener("mouseover",(()=>{for(let t=0;t<=e;t++)r[t].classList.add(s)})),t.addEventListener("mouseout",(()=>t.classList.remove(s)))})),null===(e=this.startsElem)||void 0===e||e.addEventListener("mouseout",(()=>r.forEach((t=>t.classList.remove(s)))))}createStars(t){let e=[];for(let s=0;s<5;s++)e.push((0,r.h)("span",{class:{"s-rating-stars-btn-star":!0,["s-rating-stars-"+this.size]:!0,"s-rating-stars-selected":s<t},innerHTML:i.S}));return e}render(){return(0,r.h)(r.H,null,this.value?(0,r.h)("div",{class:"s-rating-stars-wrapper"}," ",this.createStars(this.value)," "):(0,r.h)("div",{class:"s-rating-stars-element",ref:t=>this.startsElem=t},(0,r.h)("input",{type:"hidden",class:"rating_hidden_input",name:this.name,value:""}),[1,2,3,4,5].map((t=>(0,r.h)("button",{class:"s-rating-stars-btn-star s-rating-stars-"+this.size,"data-star":t},(0,r.h)("span",{innerHTML:i.S}))))))}componentDidLoad(){this.initiateRating(),this.highlightSelectedStars()}get host(){return(0,r.g)(this)}};n.style=""},9964:(t,e,s)=>{s.d(e,{S:()=>r});const r='\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32">\n<title>star2</title>\n<path d="M29.714 11.839c0 0.321-0.232 0.625-0.464 0.857l-6.482 6.321 1.536 8.929c0.018 0.125 0.018 0.232 0.018 0.357 0 0.464-0.214 0.893-0.732 0.893-0.25 0-0.5-0.089-0.714-0.214l-8.018-4.214-8.018 4.214c-0.232 0.125-0.464 0.214-0.714 0.214-0.518 0-0.75-0.429-0.75-0.893 0-0.125 0.018-0.232 0.036-0.357l1.536-8.929-6.5-6.321c-0.214-0.232-0.446-0.536-0.446-0.857 0-0.536 0.554-0.75 1-0.821l8.964-1.304 4.018-8.125c0.161-0.339 0.464-0.732 0.875-0.732s0.714 0.393 0.875 0.732l4.018 8.125 8.964 1.304c0.429 0.071 1 0.286 1 0.821z"></path>\n</svg>\n'}}]);