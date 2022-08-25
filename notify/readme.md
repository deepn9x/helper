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
        First enabling this class after auto appending after on body div block with class="notify";
        Create a new nofifyBlock add new() function;

        ms is timeout or click to close;

        success, danger, info, warning blocks

        How to use?

        Samples
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
            <div class="btn">
                Create default
            </div>

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
            notification.new("Hello World", ms, btn.getAttribute('type'))
            ms += 1000;
            setTimeout(() => {
                ms = 1000;
            }, ms)
        })
