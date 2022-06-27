    var srcList = [];
    var m = 0
    var LeftBtn = document.createElement("button");
    var RightBtn = document.createElement("button");
    var divElement = document.createElement("button");
    var backGround = document.createElement("div");
    var img = document.createElement("img");
    var Container = document.createElement("div");
    var a = document.createElement("div");

    function createAdd() {

        divElement.innerText = '+';
        divElement.style.width = '50px';
        divElement.style.height = '50px';
        divElement.style.position = 'fixed';
        divElement.style.right = '50px';
        divElement.style.top = '300px';
        divElement.style.lineHeight = '50px';
        divElement.style.textAlign = 'center';
        divElement.style.backgroundColor = '#00BFFF';
        divElement.style.font = 'normal 600 16px ';
        divElement.style.color = 'white';
        divElement.style.border = '0.5px solid #00BFFF';
        divElement.style.borderRadius = '50%';
        divElement.addEventListener("click",f);
        document.body.appendChild(divElement);
    }

    // 事件
    function buttonClick() {

        LeftBtn.innerText = "<";
        RightBtn.innerText = ">";
        LeftBtn.style.backgroundColor = "rgba(0,0,0,.8)"
        RightBtn.style.backgroundColor = "rgba(0,0,0,.8)"
        LeftBtn.style.color = 'white'
        RightBtn.style.color = 'white'


        LeftBtn.addEventListener("click",l);
        RightBtn.addEventListener("click",r);
        function l(){
             m--;
             if (m<0){
                 LeftBtn.removeEventListener(l)
             }
             document.getElementById("getimg").setAttribute("src", srcList[m])
        }
        function r(){
             m++;
             document.getElementById("getimg").setAttribute("src", srcList[m])
        }
    }

    function maskDiv() {
        backGround.style.backgroundColor = 'rgba(0,0,0,0.6)';
        backGround.setAttribute("id",'mask');
        backGround.style.width = '100%';
        backGround.style.height = '100%';
        backGround.style.position = 'fixed';
        backGround.style.top = '0';
        backGround.style.left = '0';
        backGround.style.display = 'none';

        // var mask = document.getElementById("mask");

        document.body.appendChild(backGround);
        // console.log(mask)

        backGround.appendChild(a)


    }

    function ImgAndContainer() {

         a.style.width = '100%';
         a.style.height = '100%';
         a.style.position = 'relative';
         Container.style.width = '800px';
         Container.style.height = '700px';
         Container.style.position = 'absolute'
         Container.style.right = '50%'
         Container.style.top = '50%'
         Container.style.marginTop = '-350px'
         Container.style.right = '400px'
         Container.innerText = 'hello'
         // Container.style.opacity = '0'
         img.style.height = "100%"
         img.setAttribute("id","getimg")
         Container.appendChild(img);
         a.appendChild(Container)
         a.appendChild(LeftBtn)
         a.appendChild(RightBtn)
         Container.addEventListener('click',n);

    }

    function getSrcList() {
          setTimeout(function () {
                    let i=0;
                    let pattern = /<img\s.*src="(.*\.jpg)">/;

                    while (document.getElementsByClassName('cell-container')[i].innerHTML) {
                        let match = document.getElementsByClassName('cell-container')[i].innerHTML.match(pattern)[1];
                        srcList.push(match)
                        i++;
                        document.getElementById("getimg").setAttribute("src", srcList[m])
                    }
                }, 3000)
    }

    function f(){
        backGround.style.display = 'block';
        return null //为了不报错


        }

    function n(event){
            event = event || window.event;
            event.stopPropagation();
            backGround.style.display = 'none'
    }

    createAdd()
    buttonClick()
    ImgAndContainer()
    maskDiv()
    getSrcList()