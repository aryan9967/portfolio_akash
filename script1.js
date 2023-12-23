const main_screen = document.getElementById("main_screen");
        const home = document.getElementById("home");
        const page_top = document.getElementById("top");
        const about = document.getElementById("about");
        const skills = document.getElementById("skills");
        const experience = document.getElementById("experience");
        const portfolio = document.getElementById("portfolio");
        const contact = document.getElementById("contact");

        const homebtn = document.getElementById("home_nav");
        const aboutbtn = document.getElementById("about_nav");
        const skillsbtn = document.getElementById("skills_nav");
        const expbtn = document.getElementById("exp_nav");
        const portbtn = document.getElementById("port_nav");
        const contactbtn = document.getElementById("con_nav");

        homebtn.style.color = "#792df5";

        console.log(home.offsetTop - page_top.offsetHeight);
        function scrollposition() {
            // console.log(main_screen.scrollTop)
            if(main_screen.scrollTop > (home.offsetHeight/2))
            {
                document.getElementById("top_scroll").style.bottom = "50px";
            }
            else{
                document.getElementById("top_scroll").style.bottom = "-50px";
            }

            if (main_screen.scrollTop >= (home.offsetTop - page_top.offsetHeight)) {
                document.getElementById("top").classList.add("boxshadow")
            }
            else {
                document.getElementById("top").classList.remove("boxshadow")
            }
            if(main_screen.scrollTop < about.offsetHeight-20)
            {
                homebtn.style.color = "#792df5";
                aboutbtn.style.color = "#323232";
                skillsbtn.style.color = "#323232";
                expbtn.style.color = "#323232";
                portbtn.style.color = "#323232";
                contactbtn.style.color = "#323232";
            }
            if(main_screen.scrollTop >= (about.offsetTop - page_top.offsetHeight -100) && main_screen.scrollTop < (skills.offsetTop - page_top.offsetHeight)){
                aboutbtn.style.color = "#792df5";
                homebtn.style.color = "#323232";
                skillsbtn.style.color = "#323232";
                expbtn.style.color = "#323232";
                portbtn.style.color = "#323232";
                contactbtn.style.color = "#323232";
            }
            if(main_screen.scrollTop >= (skills.offsetTop - page_top.offsetHeight - 100) && main_screen.scrollTop < (experience.offsetTop - page_top.offsetHeight)){
                aboutbtn.style.color = "#323232";
                homebtn.style.color = "#323232";
                skillsbtn.style.color = "#792df5";
                expbtn.style.color = "#323232";
                portbtn.style.color = "#323232";
                contactbtn.style.color = "#323232";
            }
            if(main_screen.scrollTop >= (experience.offsetTop - page_top.offsetHeight - 100) && main_screen.scrollTop < (portfolio.offsetTop - page_top.offsetHeight)){
                aboutbtn.style.color = "#323232";
                homebtn.style.color = "#323232";
                skillsbtn.style.color = "#323232";
                expbtn.style.color = "#792df5";
                portbtn.style.color = "#323232";
                contactbtn.style.color = "#323232";
            }
            if(main_screen.scrollTop >= (portfolio.offsetTop - page_top.offsetHeight - 100) && main_screen.scrollTop < (contact.offsetTop - page_top.offsetHeight)){
                aboutbtn.style.color = "#323232";
                homebtn.style.color = "#323232";
                skillsbtn.style.color = "#323232";
                expbtn.style.color = "#323232";
                portbtn.style.color = "#792df5";
                contactbtn.style.color = "#323232";
            }
            if(main_screen.scrollTop >= (contact.offsetTop - page_top.offsetHeight - 100)){
                aboutbtn.style.color = "#323232";
                homebtn.style.color = "#323232";
                skillsbtn.style.color = "#323232";
                expbtn.style.color = "#323232";
                portbtn.style.color = "#323232";
                contactbtn.style.color = "#792df5";
            }
        }

        const ai_data = document.getElementById("ai_data");
        const ai_contenet = document.getElementById("ai_data_content")
        ai_contenet.style.display = "none";
        ai_data.addEventListener("click", function () {


            document.getElementById("logo1").classList.remove("toggle-up");
            document.getElementById("logo1").classList.remove("toggle-down");
            if (ai_contenet.style.display == "block") {
                ai_contenet.style.display = "none";
                // document.getElementById("logo1").classList.add("toggle-up")
                // document.getElementById("logo1").classList.remove("toggle-down")
                document.getElementById("logo1").classList.add("toggle-up")


            }
            else {
                ai_contenet.style.display = "block";
                // document.getElementById("logo1").classList.add("toggle-down");

                document.getElementById("logo1").classList.add("toggle-down");
            }
        })

        const prog_data = document.getElementById("prog");
        const prog_contenet = document.getElementById("prog_content")
        prog_contenet.style.display = "none";
        prog_data.addEventListener("click", function () {

            document.getElementById("logo2").classList.remove("toggle-up");
            document.getElementById("logo2").classList.remove("toggle-down");
            if (prog_contenet.style.display == "block") {
                prog_contenet.style.display = "none"
                document.getElementById("logo2").classList.add("toggle-up")
            }
            else {
                prog_contenet.style.display = "block";
                document.getElementById("logo2").classList.add("toggle-down");
            }
        })

        const computing = document.getElementById("computing");
        const computing_content = document.getElementById("computing_content")
        computing_content.style.display = "none";
        computing.addEventListener("click", function () {

            document.getElementById("logo3").classList.remove("toggle-up");
            document.getElementById("logo3").classList.remove("toggle-down");
            if (computing_content.style.display == "block") {
                computing_content.style.display = "none"
                document.getElementById("logo3").classList.add("toggle-up")
            }
            else {
                computing_content.style.display = "block";
                document.getElementById("logo3").classList.add("toggle-down");

            }
        })

        const front = document.getElementById("front");
        const front_content = document.getElementById("front_content")
        front_content.style.display = "none";
        front.addEventListener("click", function () {

            document.getElementById("logo4").classList.remove("toggle-up");
            document.getElementById("logo4").classList.remove("toggle-down");
            if (front_content.style.display == "block") {
                front_content.style.display = "none"
                document.getElementById("logo4").classList.add("toggle-up")
            }
            else {
                front_content.style.display = "block";
                document.getElementById("logo4").classList.add("toggle-down");

            }
        })

        const back = document.getElementById("back");
        const back_content = document.getElementById("back_content")
        back_content.style.display = "none";
        back.addEventListener("click", function () {

            document.getElementById("logo5").classList.remove("toggle-up");
            document.getElementById("logo5").classList.remove("toggle-down");
            if (back_content.style.display == "block") {
                back_content.style.display = "none"
                document.getElementById("logo5").classList.add("toggle-up")
            }
            else {
                back_content.style.display = "block";
                document.getElementById("logo5").classList.add("toggle-down");

            }
        })

        const misc = document.getElementById("misc");
        const misc_content = document.getElementById("misc_content")
        misc_content.style.display = "none";
        misc.addEventListener("click", function () {

            document.getElementById("logo6").classList.remove("toggle-up");
            document.getElementById("logo6").classList.remove("toggle-down");
            if (misc_content.style.display == "block") {
                misc_content.style.display = "none"
                document.getElementById("logo6").classList.add("toggle-up")
            }
            else {
                misc_content.style.display = "block";
                document.getElementById("logo6").classList.add("toggle-down");

            }
        })

        document.getElementById("professional_exp").style.display = "flex"
        document.getElementById("education").style.display = "none";
        document.getElementById("prof_button").style.color = "#792df5";
        document.getElementById("prof_button").addEventListener("click", function () {
            document.getElementById("education").style.display = "none";
            document.getElementById("professional_exp").style.display = "flex"
            document.getElementById("prof_button").style.color = "#792df5";
            document.getElementById("acad_button").style.color = "#6e6e6e";
        })
        document.getElementById("acad_button").addEventListener("click", function () {
            document.getElementById("education").style.display = "flex";
            document.getElementById("professional_exp").style.display = "none"
            document.getElementById("acad_button").style.color = "#792df5";
            document.getElementById("prof_button").style.color = "#6e6e6e";
        })
        function topscroll() {
            main_screen.scrollTop = 0;
        }
        function scrolldown(){
            main_screen.scrollTop = about.offsetTop - page_top.offsetHeight;
        }
