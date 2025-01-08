const accordionItemHeaders = document.querySelectorAll(".accordion-item_header");
accordionItemHeaders.forEach(accordionItemHeader =>{
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    });
});
/*this didnt work also thats why i did it like in the css line 68
const accordionItemContents = document.querySelectorAll(".accordion-item_body-content");
accordionItemContents.forEach(accordionItemContent =>{
  accordionItemContent.addEventListener("click", event => {
    accordionItemContent.classList.toggle("show");
    });
});
*/