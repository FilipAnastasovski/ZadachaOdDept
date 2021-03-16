//this part will be event listeners and functions about button clicks and what to do when it happens
//

//this should pasuse the video and show the first form and put it up on the z axis so it is like a layer
$('.c-button--secondary button--icon hero__cta').click(function(){
    document.getElementsByClassName('c-video video--is-initialised video--is-playing').className = 'c-video video--is-initialised video--is-paused';

    document.getElementsByClassName('newsletter-subscibe-form').style.cssText = "display: block; position: absolute; z-index: -1;";
 });

 //after stubmit has been pressed to show the other form in order to display thank you 
 function logSubmit(event) {
    document.getElementsByClassName('newsletter-subscibe-form').style.cssText = "display: none; position: absolute; z-index: o;";
    document.getElementsByClassName('thank-you').style.cssText = "display: block; position: absolute; z-index: -1;";
  }

  // this shold handle the update of the json file as the information is parsed and stringified 
  function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const value = Object.fromEntries(data.entries());

    var parse_obj = JSON.parse(assignment.JSON);
    parse_obj.push({"email":"{{value.emal}}","name":"{{value.firstName}}"+' '+"{{value.lastName}}"});
    Str_txt = JSON.stringify(parse_obj);
  
    console.log({ value });
  }
  
  form.addEventListener('submit', handleSubmit);

 const form = document.getElementsByClassName('form');
 form.addEventListener('submit', logSubmit);

 //after the thank you to return the other form to be hidden and continue playing the video
 function myFunction() {
    document.getElementsByClassName("thank-you").style.cssText = "display: none; position: absolute; z-index: o;";
    document.getElementsByClassName('c-video video--is-initialised video--is-paused').className = 'c-video video--is-initialised video--is-playing';
  }
  //


  // an Api call, wasn't sure how to implement it properly hope a call and chek like thi is ok 
  function replaceVariablesWithValues(url, serverVariables) {
    const urlVariables = getVariablesNamesFromUrl(url);
    const declaredVariables = urlVariables.filter(el =>
      serverVariables.hasOwnProperty(el[1])
    );
  
    if (urlVariables.length !== 0 && declaredVariables.length !== 0) {
      let value;
      let newUrl = url;
  
      urlVariables.forEach(el => {
        value = getVariableValue(serverVariables, el[1]);
  
        if (value) {
          newUrl = newUrl.replace(el[0], value);
        }
      });
      return newUrl;
    }
    return url;
  }
  
  function getVariablesNamesFromUrl(url) {
    let result = [],
      array;
    const regEx = /{([^}]+)}/g;
  
    while ((array = regEx.exec(url)) !== null) {
      result.push([array[0], array[1]]);
    }
  
    return result;
  }
  
  function getVariableValue(object, variable) {
    const keyValue = object[variable]._json;
  
    if (keyValue) return keyValue.default || (keyValue.enum && keyValue.enum[0]);
  }