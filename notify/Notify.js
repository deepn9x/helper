/*
    class Notify;
    Author: Remetulla DamiR;
    mail: remetulla@gmail.com;
    Description:
        Notify({bodyContainer: {settings}})

        create() => {
            returning div block;
        }
        createOnBody() => {
            Adding after body div container notify;
        }
        new() => {
            Main function creating block with custom css;
            if you add css params then write original css parameters;
        }
        setting() => {
            Custom CSS for notifyContainer
        }

        First when enabling this class, auto appending on body div block with class="notify";
        Create a new notifyBlock add new() function;

        ms is timeout or click to close;

        success, danger, info, warning blocks

        How to use?

        Samples

        HTML
            <div class="btn {success}" type="{success}">
                Create success
            </div>
            <div class="btn {danger}" type="{danger}">
                Create danger
            </div>
            <div class="btn {info}" type="{info}">
                Create info
            </div>
            <div class="btn {warning}" type="{warning}">
                Create warning
            </div>
            <div class="btn" type="default">
                Create default
            </div>

        JavaScript

            let btn = document.querySelector('.btn');
            let ms = 1500;
            Without settings
            let notification = new Notify();

            With settings
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

            btn.addEventListener('click', function (){
                let notifyDiv = document.querySelector('.notify')
                notification.new("Hello World", ms, btn.getAttribute('type'), params = {})
                ms += 1000;
                setTimeout(() => {
                    ms = 1000;
                }, ms)
            })
*/

class Notify {
    constructor(settings) {
        this.createOnBody();
        if(settings){
            this.setting(settings['notifyContainer']);
        }
    }
    new(message, ms, type = null, params = false) {
        let notifyBlock = document.querySelector('.notify')
        if(typeof type == 'string'){
            type = type
        }
        else{
            type = type.getAttribute('type')
        }
        if (typeof params == 'object') {
            this.create(type, notifyBlock, ms, params).textContent = message;
        } else {
            this.create(type, notifyBlock, ms).textContent = message;
        }
        if (ms != false) {
            notifyBlock.querySelectorAll('.notifyBlock').forEach(item => {
                setTimeout(() => {
                    item.style.display = 'none'
                    item.remove(item)
                }, parseInt(item.getAttribute('timeout')) + 100)
            });
        }
        notifyBlock.querySelectorAll('.notifyBlock').forEach(item => {
            item.addEventListener('click', function () {
                item.remove(item)
            })
        })
    }
    create(type, parentDocument, ms, params) {
        console.log("CREATE", type)
        let div = document.createElement('div');
        div.classList.add('notifyBlock');
        div.classList.add(type);
        if (params) {
            let styles = '';
            for (let paramsKey in params) {
                let query = !isNaN(params[paramsKey]) ? params[paramsKey] + 'px' : params[paramsKey];
                styles += paramsKey + ': ' + query + '; ';
            }
            styles += 'transition: 1s all ease';
            div.style.cssText = styles;
        } else {
            div.style.fontFamily = 'Google Sans, Arial';
            div.style.width = '100%';
            div.style.textAlign = 'center';
            div.style.borderRadius = '10px';
            div.style.marginBottom = '10px';
            div.style.padding = '10px';
            div.style.transition = 'all 1s ease';
        }
        let bg = '';
        if (type == 'success') bg = '#28a745';
        else if (type == 'danger') bg = '#dc3545';
        else if (type == 'info') bg = '#17a2b8';
        else if (type == 'warning') bg = '#ffc107';
        else bg = '#007bff'
        div.style.backgroundColor = bg;
        div.setAttribute('timeout', ms)
        parentDocument.append(div);
        return div;
    }
    createOnBody() {
        let body = document.querySelector('body');
        if (!body.querySelector('.notify')) {
            let div = document.createElement('div');
            div.classList.add('notify')
            div.style.position = 'fixed';
            div.style.right = '0';
            div.style.margin = '10px';
            div.style.paddingRight = '20px';
            div.style.width = '200px';
            document.querySelector('body').insertBefore(div, document.querySelector('body').firstChild)
        }
    }
    setting(params){
        let styles = '';
        for (let paramsKey in params) {
            let query = !isNaN(params[paramsKey]) ? params[paramsKey] + 'px' : params[paramsKey];
            styles += paramsKey + ': ' + query + '; ';
        }
        document.querySelector(".notify").style.cssText = styles;
    }
}
