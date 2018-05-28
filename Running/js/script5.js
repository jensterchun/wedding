let originalData = [];

booyah.addEventListener('click', () => {
    const userBookInfo = document.getElementById(
        'title',
        'author',
        'quote',
        'category'
    );

    const userTypes = {
        title: title.value,
        author: author.value,
        quote: quote.value,
        category: category.value
    };

    originalData.push(userTypes);

    localStorage.setItem("Quotes",quote.value);

    console.log(originalData);
});

const other = () => {
    console.log("Other quote");
    console.log(localStorage.getItem("Quotes"));
};

const categoryOne = () => {
    originalData.filter(data => 
        data.category === "Brainy" ? console.log(data) : other());
};
const categoryTwo = () => {
    originalData.filter(data =>
        data.category === "Absurd" ? console.log(data) : other());
};
const categoryThree = () => {
    originalData.filter(data =>
        data.category === "Sublime" ? console.log(data) : other());
};
const categoryFour = () => {
    originalData.filter(data => 
        data.category === "Uncategorized" ? console.log(`Please categorize this quote: "${data.quote}" by ${data.author}'s ${data.title}.`) : other());
};
const categoryFive = () => {
    console.log("hello");
};

/*
if (originalData.category === 'Brainy') {
    console.log(originalData + "Hellos");
}
*/

const displayCategory = () => {
    const category = document.getElementById('list');
    category.innerHTML = '';
};
