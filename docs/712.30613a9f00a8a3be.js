"use strict";(self.webpackChunktarea2_angular_escalab=self.webpackChunktarea2_angular_escalab||[]).push([[712],{712:(T,c,r)=>{r.r(c),r.d(c,{GameOfThroneModule:()=>d});var a=r(808),m=r(783),e=r(223),s=r(340),i=r(520);let f=(()=>{class o{constructor(t){this._http=t}getDataGameOfThrone(){return this._http.get(`${s.N.URL_GAMEOFTHRONE}/api/v2/Characters`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(i.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function l(o,n){if(1&o&&(e.TgZ(0,"div",2),e.TgZ(1,"div",3),e._UZ(2,"img",4),e.TgZ(3,"div",5),e.TgZ(4,"h5",6),e._uU(5),e.qZA(),e.TgZ(6,"p",7),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=n.$implicit;e.xp6(2),e.s9C("src",t.imageUrl,e.LSH),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.fullName)}}const h=[{path:"",component:(()=>{class o{constructor(t){this._gameOfThroneService=t}ngOnInit(){this.getDataGameOfThrone()}getDataGameOfThrone(){this.datos$=this._gameOfThroneService.getDataGameOfThrone()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-game-of-throne"]],decls:3,vars:3,consts:[[1,"row","row-cols-1","row-cols-md-3","g-4","mt-2"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(t,p){1&t&&(e.TgZ(0,"div",0),e.YNc(1,l,8,3,"div",1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,p.datos$)))},directives:[a.sg],pipes:[a.Ov],styles:[""]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(h)],m.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,u]]}),o})()}}]);