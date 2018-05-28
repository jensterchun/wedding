const story = [
    {
        text : 'Once upon a time, there was a beautiful Joon-Sub. He had a very obedient sister Jenny and she was massaging him. You are Jenny. Do you...',
        actions : [
            {text : 'Stop Massaging', goto : 1},
            {text : 'Continue Massaging', goto : 2},
            {text : 'Massage REALLY WELL', goto : 3},
        ]
    },
    {
        text : 'Joon gets very upset. and he goes bonkers and demands additional hours of oodles of... he fails to English. Then you cry. Game Over.',
        actions : [
        ]
    },
    {
        text : 'You continue massaging. Great! Game continues... What do you do?',
        actions : [
            {text : 'Stop Massaging', goto : 1},
            {text : 'Continue Massaging', goto : 3},
        ]
    },
    {
        text : 'Joon tells his great sister... You can stop now! Oh, and here\'s a hundred dollars *smiles*',
        actions : [
        ]
    }
];

clearOldACtions = () => {
    document.querySelector('.js-actions').innerHTML = '';
}

renderStory = (storyLocation = 0) => {
    // get text DOM
    const textOutput = document.querySelector('.js-text');
    const currentStory = story[storyLocation]

    // puts text into DOM
    textOutput.innerText = currentStory.text;
}

renderButton = (action, DOM) => {
    // 1. Create the button
    const button = document.createElement("button");
    button.innerHTML = action.text;

    // 2. Append somewhere
    DOM.appendChild(button);

    // 3. Add event handler
    button.addEventListener ("click", () => {
        clearOldACtions();
        renderStory(action.goto);
        renderActions(action.goto);
    });
}

renderActions = (storyLocation = 0) => {

    // get actions DOM
    const actionOutput = document.querySelector('.js-actions');
    const currentStory = story[storyLocation];

    // put all the actions as buttons
    currentStory.actions.map((action)=> {
        renderButton(action,actionOutput);
    });

}

// show first story
renderStory(0);
renderActions(0);