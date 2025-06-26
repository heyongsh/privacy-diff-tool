document.getElementById('compareBtn').addEventListener('click', function() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const resultContainer = document.getElementById('result');

    resultContainer.innerHTML = ''; // Clear previous results

    const diff = Diff.diffChars(text1, text2);
    const fragment = document.createDocumentFragment();

    diff.forEach(part => {
        // green for additions, red for deletions, grey for common parts
        const color = part.added ? 'ins' :
            part.removed ? 'del' : 'span';

        const span = document.createElement(color);
        span.appendChild(document.createTextNode(part.value));
        fragment.appendChild(span);
    });

    resultContainer.appendChild(fragment);
});
