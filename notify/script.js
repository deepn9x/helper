let btn = document.querySelectorAll('.btn');
let ms = 1500;

let notification = new Notify({
    notifyContainer: {
        'background': 'yellow',
        'position': 'fixed',
        'right': 0,
        'padding-right': 20,
        'margin': 10,
        'width': 300
    }
});

btn.forEach(item=> {
    item.addEventListener('click', function (){
        notification.new(`Created ${item.getAttribute('type') ?? 'default'} `, ms, item.getAttribute('type'))
        ms += 1000;
        setTimeout(() => {
            ms = 1000;
        }, ms)
    })
})
