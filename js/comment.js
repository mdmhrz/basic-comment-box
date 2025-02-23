document.getElementById('comment-btn').addEventListener('click', function (){
    const commentTextBox = document.getElementById('comment-text-box');
    const commentText = commentTextBox.value;

    if (commentText === '') {
        alert('Please enter a comment!');
        return;
    }

    const commentWorld = document.getElementById('comment-world');
    const day = new Date();
    const date = day.getDate();
    const month = day.getMonth()+1;
    const year = day.getFullYear();
    const finalDate = date + '/' + month + '/' + year;
    

    const newComment = document.createElement('section');
    newComment.innerHTML = `
    <div class="comment-container">
        <h4 class="comment-author">Robiul Hakim</h4>
        <small class="comment-time">${finalDate}</small>
        <p class="comment-text"> ${commentText}.</p>
    </div>
    `;
    commentWorld.append(newComment);
    commentTextBox.value = '';
})