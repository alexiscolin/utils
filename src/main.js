
/*==============================*/
/*==============================*/
/*         UTILS MODULE         */
/*==============================*/
/*==============================*/

var utils = {

  /**
  /*  CREATE-ELEMENT - create DOM element and return it  */
  /*  @param {object} options - list of element's configuration */
  /*  @param {object} insert - insert element in DOM from function */
  /* */
  createElement: function(options, insert){

    // variables
    const config = {
      type: options.type ||  'div',
      id: option.id || null,
      style: options.style ||  null,
      attributes: attributes.type ||  null,
      src: options.src ||  null,
      link: options.link ||  null,
      content: options.content ||  null
    };
    const { parent = null, method = 'after'} = insert;

    // creation
    let el = document.createElement(config.type); 


    // id and style
    config.id && (el.id = config.id);
    typeof config.style === 'string' && (el.className = config.style);

    // img src and link href
    config.type === 'img' && config.src && (el.src = config.src);
    config.type === 'a' && config.link && (el.href = config.link);
    
    //content
    config.content && (el.innerHTML = config.content);

    // ------- SOON!! ------
    // attributes (multiple)
    // inline style
    // insert option

    return el;
  }
};

export { utils };
