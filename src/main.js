
/*==============================*/
/*==============================*/
/*         UTILS MODULE         */
/*==============================*/
/*==============================*/

var utils = {
  
  /**********************
  ******* DOM FUNC ******
  **********************/

  /**
  /*  CREATE-ELEMENT - create DOM element and return it  */
  /*  @param {object} [options] - list of element's configuration */
  /*  @param {object} [insert] - insert element in DOM from function */
  /* */
  createElement: function(options = {}, insert = {}){

    // variables
    const config = {
      type: options.type ||  'div',
      id: options.id || null,
      style: options.style ||  null,
      attributes: options.attributes ||  null, // pas oublier alt, target ou title
      src: options.src ||  null,
      link: options.link ||  null,
      content: options.content ||  null
    };
    const { target = null, method:targetMethod = 'after', type:targetType = 'sibling'} = insert;

    // creation
    let el = document.createElement(config.type);

    // id, classes and style
    config.id && (el.id = config.id);
    typeof config.style === 'string' && (el.className = config.style);
    if(typeof config.style === 'object'){
      for(let style in config.style){
        let inline = style.replace( /-([a-z])/ig, (hyphen, char)=>{ return char.toUpperCase(); });
        config.style.hasOwnProperty(style) && (el.style[inline] = config.style[style]);
      }
    }

    // img src and link href
    config.type === 'img' && config.src && (el.src = config.src);
    config.type === 'a' && config.link && (el.href = config.link);

    // attributes
    if(config.attributes){
      for(let attribute in config.attributes){
        config.attributes.hasOwnProperty(attribute) && el.setAttribute(attribute, config.attributes[attribute]);
      }
    }

    //content
    config.content && (el.innerHTML = config.content);

    // insertion
    if(target){
      const insertParent = targetType === 'container' ? target : target.parentNode;
      const insertPos = targetMethod === 'before' && targetType === 'sibling' ? target
        : targetMethod === 'after' && targetType === 'sibling' ? target.nextSibling
        : targetMethod === 'before' && targetType === 'container' ? target.firstChild
        : targetMethod === 'after' && targetType === 'container' ? target.lastChild.nextSibling
        : null;

      insertParent.insertBefore(el, insertPos);
    }

    return el;
  },
  
  
  /**********************
  *** FUNCTIONS FUNC ****
  **********************/
  
  /**
  /*  WATCH - create a proxy watcher in order to listen for properties changes */
  /*  @param {object} obj - object with properties you wan to listen */
  /*  @return {object} proxy - proxy object you can change to be listened */
  /* */
  watch: function(obj){
    const restricted = function(){};
    let proxy = new restricted();
    proxy.values = {};
    proxy.listening = {};

    // define getter/setter in proxy
    for(let prop in obj){
      if(obj.hasOwnProperty(prop)){
        proxy.values[prop] = obj[prop];

        Object.defineProperty(proxy, prop, {
          set: function(newValue){
            this.values[prop] = newValue;
            this.listening[prop] && this.listening[prop](newValue);
          },
          get: function(){
            return this.values[prop];
          }
        });
      }
    }

    // allocation listener function
    restricted.prototype.addListener = function(property, handler){
      for(let prop in proxy.values){
        if(!proxy.values.hasOwnProperty(property)) throw "Watch function - listener variable '"+ property +"' don't exist on the proxy watcher";
        proxy.values.hasOwnProperty(prop) && prop == property && (proxy.listening[prop] = handler);
        return proxy.listening[prop];
      }
    };

    // remove listener function
    restricted.prototype.removeListener = function(listener){
      for(let listened in proxy.listening){
        if(proxy.listening.hasOwnProperty(listened) && proxy.listening[listened] === listener){
          proxy.listening[listened] = null;
          delete proxy.listening[listened];
        }
      }
    };

    return proxy
  },


  /**********************
  ****** MATH FUNC ******
  **********************/
  math: {
    /**
    /*  AFFINE - function affine - (AX + b)  */
    /* */
    createAffine: {
      a: function(x, y){
        return (y[1] - x[1]) / (y[0] - x[0]);
      },

      b: function(a, x){
        return x[1] - (a * x[0]);
      },

      func: function(x, y){

        const closeX = x;
        const closeY = y;

        if(closeX[0] === closeY[0]){
          throw "Affine function - closeX[0] and closeY[0] variables are equals! " + closeX[0] + " === " + closeY[0];
        }

        const a = function(){
          return utils.math.affine.a(closeX, closeY);
        }();

        const b = function(){
          return utils.math.affine.b(a, closeX);
        }();

        let getPoint = function(point){
          return (a * point) + b;
        }

        return {
          a, b, getPoint
        }
      }
    },
  },

  /**
  /*  RANDOM - get a random number on a min-max range  */
  /*  @param {number} [min] - min number (default: 0)*/
  /*  @param {number} [max] - max number (default: 1) */
  /* */
  random: function(min = 0, max = 1){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

export { utils };
