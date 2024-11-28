const button = document.querySelector('button');
const bookList = document.getElementById('book-list');
button.addEventListener('click', function() {
    const newBook = document.createElement('div');

    // Title Section
    const titleDiv = document.createElement('div');
    const title = document.createElement('input');
    title.type = 'text';
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title: ';
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(title);

    // Author Section
    const authorDiv = document.createElement('div');
    const author = document.createElement('input');
    author.type = 'text';
    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author: ';
    authorDiv.appendChild(authorLabel);
    authorDiv.appendChild(author);

    // Genre Section
    const genreDiv = document.createElement('div');
    const genre = document.createElement('input');
    genre.type = 'text';
    const genreLabel = document.createElement('label');
    genreLabel.textContent = 'Genre: ';
    genreDiv.appendChild(genreLabel);
    genreDiv.appendChild(genre);

    // Append all sections to newBook div
    newBook.appendChild(titleDiv);
    newBook.appendChild(authorDiv);
    newBook.appendChild(genreDiv);

    // Add Button to Save the Book
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    newBook.appendChild(addButton);

    // Add Book Button Functionality
    addButton.addEventListener('click', function() {
        // Replace input fields with plain text
        titleDiv.innerHTML = `<strong>Title: </strong> ${title.value}`;
        authorDiv.innerHTML = `<strong>Author: </strong> ${author.value}`;
        genreDiv.innerHTML = `<strong>Genre: </strong> ${genre.value}`;
        
        // Remove the Add button after saving
        newBook.removeChild(addButton);
    });

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    newBook.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        bookList.removeChild(newBook);
    });

    // Append the new book container to the book list
    bookList.appendChild(newBook);
});
