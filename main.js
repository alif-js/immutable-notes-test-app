document.getElementById('btn-post').addEventListener('click',function(){
    const newComment = document.getElementById('new-comment');
    const commentContent = newComment.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = commentContent;

    commentContainer.appendChild(p);

    newComment.value = '';
})

document.getElementById('btn-remove').addEventListener('click',function(){
    // const newComment = document.getElementById('new-comment');
    // const commentContent = newComment.value;

    const commentContainer = document.getElementById('comment-container');
    // const p = document.createElement('p');
    // p.innerText = commentContent;

    commentContainer.removeChild(commentContainer.lastChild);

    newComment.value = '';
})