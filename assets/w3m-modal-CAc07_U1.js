import{$ as I,a0 as T,L as y,M as a,C as n,x as k,z as x,a1 as p,t as C,a2 as L,q as h,S as N,Y as O,a3 as K,a4 as R,V as z,a5 as M,a6 as $,a7 as w,a8 as W}from"./index-Bifp6dK1.js";import"./router-BImpmBA5.js";import"./state-BoKTNCD3.js";const P=I`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  cross-wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  /* 미니 윈도우 모드 - 최우선 적용 */
  @media (pointer: coarse) and (max-height: 300px) {
    cross-wui-card {
      max-width: 300px !important;
      width: 300px !important;
      height: 300px !important;
      max-height: 300px !important;
      margin: 0;
    }
  }

  /* 실제 모바일 디바이스의 랜드스케이프 모드에서만 모달 확장 */
  @media (orientation: landscape) and (pointer: coarse) and (max-width: 1200px) and (min-width: 650px) and (min-height: 300px) {
    cross-wui-card {
      max-width: 700px;
      width: 700px;
      height: 360px;
      max-height: 360px;
      margin: 0;
    }
  }

  :host(.embedded) cross-wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  cross-wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    cross-wui-flex {
      align-items: flex-start;
    }

    cross-wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    cross-wui-flex {
      align-items: flex-end;
    }

    cross-wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var c=function(m,e,t,s){var o=arguments.length,i=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(m,e,t,s);else for(var l=m.length-1;l>=0;l--)(d=m[l])&&(i=(o<3?d(i):o>3?d(e,t,i):d(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i};const S="scroll-lock";let r=class extends T{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=y.state.enableEmbedded,this.open=a.state.open,this.caipAddress=n.state.activeCaipAddress,this.caipNetwork=n.state.activeCaipNetwork,this.shake=a.state.shake,this.initializeTheming(),k.prefetchAnalyticsConfig(),this.unsubscribe.push(a.subscribeKey("open",e=>e?this.onOpen():this.onClose()),a.subscribeKey("shake",e=>this.shake=e),n.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),n.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),y.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e))}firstUpdated(){var e,t;if(x.fetchNetworkImage((t=(e=this.caipNetwork)==null?void 0:e.assets)==null?void 0:t.imageId),this.caipAddress){if(this.enableEmbedded){a.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?p`${this.contentTemplate()}
        <cross-w3m-tooltip></cross-w3m-tooltip> `:this.open?p`
          <cross-wui-flex
            @click=${this.onOverlayClick.bind(this)}
            data-testid="cross-w3m-modal-overlay"
          >
            ${this.contentTemplate()}
          </cross-wui-flex>
          <cross-w3m-tooltip></cross-w3m-tooltip>
        `:null}contentTemplate(){const e=C.isMiniWindow();return p` <cross-wui-card
      shake="${this.shake}"
      data-embedded="${L(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="cross-w3m-modal-card"
    >
      ${e?null:p`<cross-w3m-header></cross-w3m-header>`}
      <cross-w3m-router></cross-w3m-router>
      <cross-w3m-snackbar></cross-w3m-snackbar>
      <cross-w3m-alertbar></cross-w3m-alertbar>
    </cross-wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){h.state.view==="UnsupportedChain"||await N.isSIWXCloseDisabled()?a.shake():a.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=O.state,s=K.getColorTheme(t);R(e,s)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),z.hide(),this.onRemoveKeyboardListener()}onOpen(){this.prefetch(),this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=S,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      cross-w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${S}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("cross-wui-card");e==null||e.focus(),window.addEventListener("keydown",s=>{if(s.key==="Escape")this.handleClose();else if(s.key==="Tab"){const{tagName:o}=s.target;o&&!o.includes("W3M-")&&!o.includes("CROSS-WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=n.state.isSwitchingNamespace,s=C.getPlainAddress(e);!s&&!t?a.close():t&&s&&h.goBack(),await N.initializeIfEnabled(),this.caipAddress=e,n.setIsSwitchingNamespace(!1)}onNewNetwork(e){var u,b,f,g,v;x.fetchNetworkImage((u=e==null?void 0:e.assets)==null?void 0:u.imageId);const t=(f=(b=this.caipNetwork)==null?void 0:b.caipNetworkId)==null?void 0:f.toString(),s=(g=e==null?void 0:e.caipNetworkId)==null?void 0:g.toString(),o=t&&s&&t!==s,i=n.state.isSwitchingNamespace,d=((v=this.caipNetwork)==null?void 0:v.name)===M.UNSUPPORTED_NETWORK_NAME,l=h.state.view==="ConnectingExternal",E=!this.caipAddress,A=o&&!d&&!i,U=h.state.view==="UnsupportedChain";!l&&(E||U||A)&&h.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(this.hasPrefetched=!0,k.prefetch())}};r.styles=P;c([$({type:Boolean})],r.prototype,"enableEmbedded",void 0);c([w()],r.prototype,"open",void 0);c([w()],r.prototype,"caipAddress",void 0);c([w()],r.prototype,"caipNetwork",void 0);c([w()],r.prototype,"shake",void 0);r=c([W("cross-w3m-modal")],r);export{r as W3mModal};
