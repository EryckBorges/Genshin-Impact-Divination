//Mondsthad

const selectVenti = document.querySelector('#venti');
const selectDiluc = document.querySelector('#diluc');
const selectMona = document.querySelector('#mona');
const selectAlbedo = document.querySelector('#albedo');
const selectJean = document.querySelector('#jean');
const selectKlee = document.querySelector('#klee');
const selectEula = document.querySelector('#eula');
const selectBarbara = document.querySelector('#barbara');
const selectAmber = document.querySelector('#amber');
const selectRazor = document.querySelector('#razor');
const selectSucrose = document.querySelector('#sucrose');
const selectRosaria = document.querySelector('#rosaria');
const selectLisa = document.querySelector('#lisa');
const selectKaeya = document.querySelector('#kaeya');
const selectDiona = document.querySelector('#diona');
const selectFischl = document.querySelector('#fischl');
const selectNoelle = document.querySelector('#noelle');
const selectBennett = document.querySelector('#bennett');
const selectMika = document.querySelector('#mika');

export const ventiUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('ventiAvatar') !== 'comprado') {
        selectVenti.classList.add('disabled');
        selectVenti.setAttribute('disabled', 'true');
        venti.style.background = '#dd1440';
        venti.style.transition = '0.5s linear';
        setTimeout(() => {
            venti.style.background = "url('/icon/Background5.png')";
            venti.style.backgroundPosition = 'center';
            venti.style.backgroundRepeat = 'no-repeat';
            venti.style.backgroundSize = 'cover';
            venti.style.backgroundAttachment = 'fixed';
            venti.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#venti img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/venti.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const dilucUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('dilucAvatar') !== 'comprado') {
        selectDiluc.classList.add('disabled');
        selectDiluc.setAttribute('disabled', 'true');
        diluc.style.background = '#dd1440';
        diluc.style.transition = '0.5s linear';
        setTimeout(() => {
            diluc.style.background = "url('/icon/Background5.png')";
            diluc.style.backgroundPosition = 'center';
            diluc.style.backgroundRepeat = 'no-repeat';
            diluc.style.backgroundSize = 'cover';
            diluc.style.backgroundAttachment = 'fixed';
            diluc.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#diluc img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/diluc.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const albedoUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('albedoAvatar') !== 'comprado') {
        selectAlbedo.classList.add('disabled');
        selectAlbedo.setAttribute('disabled', 'true');
        albedo.style.background = '#dd1440';
        albedo.style.transition = '0.5s linear';
        setTimeout(() => {
            albedo.style.background = "url('/icon/Background5.png')";
            albedo.style.backgroundPosition = 'center';
            albedo.style.backgroundRepeat = 'no-repeat';
            albedo.style.backgroundSize = 'cover';
            albedo.style.backgroundAttachment = 'fixed';
            albedo.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#albedo img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/albedo.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const jeanUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('jeanAvatar') !== 'comprado') {
        selectJean.classList.add('disabled');
        selectJean.setAttribute('disabled', 'true');
        jean.style.background = '#dd1440';
        jean.style.transition = '0.5s linear';
        setTimeout(() => {
            jean.style.background = "url('/icon/Background5.png')";
            jean.style.backgroundPosition = 'center';
            jean.style.backgroundRepeat = 'no-repeat';
            jean.style.backgroundSize = 'cover';
            jean.style.backgroundAttachment = 'fixed';
            jean.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#jean img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/jean.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kleeUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('kleeAvatar') !== 'comprado') {
        selectKlee.classList.add('disabled');
        selectKlee.setAttribute('disabled', 'true');
        klee.style.background = '#dd1440';
        klee.style.transition = '0.5s linear';
        setTimeout(() => {
            klee.style.background = "url('/icon/Background5.png')";
            klee.style.backgroundPosition = 'center';
            klee.style.backgroundRepeat = 'no-repeat';
            klee.style.backgroundSize = 'cover';
            klee.style.backgroundAttachment = 'fixed';
            klee.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#klee img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/klee.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const eulaUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('eulaAvatar') !== 'comprado') {
        selectEula.classList.add('disabled');
        selectEula.setAttribute('disabled', 'true');
        eula.style.background = '#dd1440';
        eula.style.transition = '0.5s linear';
        setTimeout(() => {
            eula.style.background = "url('/icon/Background5.png')";
            eula.style.backgroundPosition = 'center';
            eula.style.backgroundRepeat = 'no-repeat';
            eula.style.backgroundSize = 'cover';
            eula.style.backgroundAttachment = 'fixed';
            eula.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#eula img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/eula.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const monaUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('monaAvatar') !== 'comprado') {
        selectMona.classList.add('disabled');
        selectMona.setAttribute('disabled', 'true');
        mona.style.background = '#dd1440';
        mona.style.transition = '0.5s linear';
        setTimeout(() => {
            mona.style.background = "url('/icon/Background5.png')";
            mona.style.backgroundPosition = 'center';
            mona.style.backgroundRepeat = 'no-repeat';
            mona.style.backgroundSize = 'cover';
            mona.style.backgroundAttachment = 'fixed';
            mona.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#mona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/mona.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const barbaraUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('barbaraAvatar') !== 'comprado') {
        selectBarbara.classList.add('disabled');
        selectBarbara.setAttribute('disabled', 'true');
        barbara.style.background = '#dd1440';
        barbara.style.transition = '0.5s linear';
        setTimeout(() => {
            barbara.style.background = "url('/icon/Background4.png')";
            barbara.style.backgroundPosition = 'center';
            barbara.style.backgroundRepeat = 'no-repeat';
            barbara.style.backgroundSize = 'cover';
            barbara.style.backgroundAttachment = 'fixed';
            barbara.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#barbara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/barbara.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const amberUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('amberAvatar') !== 'comprado') {
        selectAmber.classList.add('disabled');
        selectAmber.setAttribute('disabled', 'true');
        amber.style.background = '#dd1440';
        amber.style.transition = '0.5s linear';
        setTimeout(() => {
            amber.style.background = "url('/icon/Background4.png')";
            amber.style.backgroundPosition = 'center';
            amber.style.backgroundRepeat = 'no-repeat';
            amber.style.backgroundSize = 'cover';
            amber.style.backgroundAttachment = 'fixed';
            amber.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#amber img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/amber.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const fischlUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('fischlAvatar') !== 'comprado') {
        selectFischl.classList.add('disabled');
        selectFischl.setAttribute('disabled', 'true');
        fischl.style.background = '#dd1440';
        fischl.style.transition = '0.5s linear';
        setTimeout(() => {
            fischl.style.background = "url('/icon/Background4.png')";
            fischl.style.backgroundPosition = 'center';
            fischl.style.backgroundRepeat = 'no-repeat';
            fischl.style.backgroundSize = 'cover';
            fischl.style.backgroundAttachment = 'fixed';
            fischl.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#fischl img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/fischl.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const razorUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('razorAvatar') !== 'comprado') {
        selectRazor.classList.add('disabled');
        selectRazor.setAttribute('disabled', 'true');
        razor.style.background = '#dd1440';
        razor.style.transition = '0.5s linear';
        setTimeout(() => {
            razor.style.background = "url('/icon/Background4.png')";
            razor.style.backgroundPosition = 'center';
            razor.style.backgroundRepeat = 'no-repeat';
            razor.style.backgroundSize = 'cover';
            razor.style.backgroundAttachment = 'fixed';
            razor.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#razor img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/razor.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const dionaUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('dionaAvatar') !== 'comprado') {
        selectDiona.classList.add('disabled');
        selectDiona.setAttribute('disabled', 'true');
        diona.style.background = '#dd1440';
        diona.style.transition = '0.5s linear';
        setTimeout(() => {
            diona.style.background = "url('/icon/Background4.png')";
            diona.style.backgroundPosition = 'center';
            diona.style.backgroundRepeat = 'no-repeat';
            diona.style.backgroundSize = 'cover';
            diona.style.backgroundAttachment = 'fixed';
            diona.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#diona img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/diona.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const lisaUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('lisaAvatar') !== 'comprado') {
        selectLisa.classList.add('disabled');
        selectLisa.setAttribute('disabled', 'true');
        lisa.style.background = '#dd1440';
        lisa.style.transition = '0.5s linear';
        setTimeout(() => {
            lisa.style.background = "url('/icon/Background4.png')";
            lisa.style.backgroundPosition = 'center';
            lisa.style.backgroundRepeat = 'no-repeat';
            lisa.style.backgroundSize = 'cover';
            lisa.style.backgroundAttachment = 'fixed';
            lisa.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lisa img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/lisa.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const rosariaUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('rosariaAvatar') !== 'comprado') {
        selectRosaria.classList.add('disabled');
        selectRosaria.setAttribute('disabled', 'true');
        rosaria.style.background = '#dd1440';
        rosaria.style.transition = '0.5s linear';
        setTimeout(() => {
            rosaria.style.background = "url('/icon/Background4.png')";
            rosaria.style.backgroundPosition = 'center';
            rosaria.style.backgroundRepeat = 'no-repeat';
            rosaria.style.backgroundSize = 'cover';
            rosaria.style.backgroundAttachment = 'fixed';
            rosaria.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#rosaria img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/rosaria.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const sucroseUser = () => {
    const audio = new Audio();

    if(localStorage.getItem('sucroseAvatar') !== 'comprado') {
        selectSucrose.classList.add('disabled');
        selectSucrose.setAttribute('disabled', 'true');
        sucrose.style.background = '#dd1440';
        sucrose.style.transition = '0.5s linear';
        setTimeout(() => {
            sucrose.style.background = "url('/icon/Background4.png')";
            sucrose.style.backgroundPosition = 'center';
            sucrose.style.backgroundRepeat = 'no-repeat';
            sucrose.style.backgroundSize = 'cover';
            sucrose.style.backgroundAttachment = 'fixed';
            sucrose.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sucrose img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const efeito = "./music/sucrose.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const noelleUser = () => {
    if(localStorage.getItem('noelleAvatar') !== 'comprado') {
        selectNoelle.classList.add('disabled');
        selectNoelle.setAttribute('disabled', 'true');
        noelle.style.background = '#dd1440';
        noelle.style.transition = '0.5s linear';
        setTimeout(() => {
            noelle.style.background = "url('/icon/Background4.png')";
            noelle.style.backgroundPosition = 'center';
            noelle.style.backgroundRepeat = 'no-repeat';
            noelle.style.backgroundSize = 'cover';
            noelle.style.backgroundAttachment = 'fixed';
            noelle.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#noelle img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/noelle.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const bennettUser = () => {
    if(localStorage.getItem('bennettAvatar') !== 'comprado') {
        selectBennett.classList.add('disabled');
        selectBennett.setAttribute('disabled', 'true');
        bennett.style.background = '#dd1440';
        bennett.style.transition = '0.5s linear';
        setTimeout(() => {
            bennett.style.background = "url('/icon/Background4.png')";
            bennett.style.backgroundPosition = 'center';
            bennett.style.backgroundRepeat = 'no-repeat';
            bennett.style.backgroundSize = 'cover';
            bennett.style.backgroundAttachment = 'fixed';
            bennett.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#bennett img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/bennett.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kaeyaUser = () => {
    if(localStorage.getItem('kaeyaAvatar') !== 'comprado') {
        selectKaeya.classList.add('disabled');
        selectKaeya.setAttribute('disabled', 'true');
        kaeya.style.background = '#dd1440';
        kaeya.style.transition = '0.5s linear';
        setTimeout(() => {
            kaeya.style.background = "url('/icon/Background4.png')";
            kaeya.style.backgroundPosition = 'center';
            kaeya.style.backgroundRepeat = 'no-repeat';
            kaeya.style.backgroundSize = 'cover';
            kaeya.style.backgroundAttachment = 'fixed';
            kaeya.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kaeya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/kaeya.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const mikaUser = () => {
    if(localStorage.getItem('mikaAvatar') !== 'comprado') {
        selectMika.classList.add('disabled');
        selectMika.setAttribute('disabled', 'true');
        mika.style.background = '#dd1440';
        mika.style.transition = '0.5s linear';
        setTimeout(() => {
            mika.style.background = "url('/icon/Background5.png')";
            mika.style.backgroundPosition = 'center';
            mika.style.backgroundRepeat = 'no-repeat';
            mika.style.backgroundSize = 'cover';
            mika.style.backgroundAttachment = 'fixed';
            mika.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#mika img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/mika.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

//liyue

const selectHutao = document.querySelector('#hutao');
const selectZhongli = document.querySelector('#zhongli');
const selectGanyu = document.querySelector('#ganyu');
const selectShenhe = document.querySelector('#shenhe');
const selectXiao = document.querySelector('#xiao');
const selectYelan = document.querySelector('#yelan');
const selectQiqi = document.querySelector('#qiqi');
const selectBaizhu = document.querySelector('#baizhu');
const selectKeqing = document.querySelector('#keqing');
const selectYanfei = document.querySelector('#yanfei');
const selectYunjin = document.querySelector('#yunjin');
const selectYaoyao = document.querySelector('#yaoyao');
const selectChongyun = document.querySelector('#chongyun');
const selectXingqiu = document.querySelector('#xingqiu');
const selectXiangling = document.querySelector('#xiangling');
const selectBeidou = document.querySelector('#beidou');
const selectXinyan = document.querySelector('#xinyan');
const selectNingguang = document.querySelector('#ningguang');


export const hutaoUser = () => {
    if(localStorage.getItem('hutaoAvatar') !== 'comprado') {
        selectHutao.classList.add('disabled');
        selectHutao.setAttribute('disabled', 'true');
        hutao.style.background = '#dd1440';
        hutao.style.transition = '0.5s linear';
        setTimeout(() => {
            hutao.style.background = "url('/icon/Background5.png')";
            hutao.style.backgroundPosition = 'center';
            hutao.style.backgroundRepeat = 'no-repeat';
            hutao.style.backgroundSize = 'cover';
            hutao.style.backgroundAttachment = 'fixed';
            hutao.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#hutao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/hutao.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const zhongliUser = () => {
    if(localStorage.getItem('zhongliAvatar') !== 'comprado') {
        selectZhongli.classList.add('disabled');
        selectZhongli.setAttribute('disabled', 'true');
        zhongli.style.background = '#dd1440';
        zhongli.style.transition = '0.5s linear';
        setTimeout(() => {
            zhongli.style.background = "url('/icon/Background5.png')";
            zhongli.style.backgroundPosition = 'center';
            zhongli.style.backgroundRepeat = 'no-repeat';
            zhongli.style.backgroundSize = 'cover';
            zhongli.style.backgroundAttachment = 'fixed';
            zhongli.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#zhongli img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/zhongli.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const xiaoUser = () => {
    if(localStorage.getItem('xiaoAvatar') !== 'comprado') {
        selectXiao.classList.add('disabled');
        selectXiao.setAttribute('disabled', 'true');
        xiao.style.background = '#dd1440';
        xiao.style.transition = '0.5s linear';
        setTimeout(() => {
            xiao.style.background = "url('/icon/Background5.png')";
            xiao.style.backgroundPosition = 'center';
            xiao.style.backgroundRepeat = 'no-repeat';
            xiao.style.backgroundSize = 'cover';
            xiao.style.backgroundAttachment = 'fixed';
            xiao.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xiao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/xiao.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const yelanUser = () => {
    if(localStorage.getItem('yelanAvatar') !== 'comprado') {
        selectYelan.classList.add('disabled');
        selectYelan.setAttribute('disabled', 'true');
        yelan.style.background = '#dd1440';
        yelan.style.transition = '0.5s linear';
        setTimeout(() => {
            yelan.style.background = "url('/icon/Background5.png')";
            yelan.style.backgroundPosition = 'center';
            yelan.style.backgroundRepeat = 'no-repeat';
            yelan.style.backgroundSize = 'cover';
            yelan.style.backgroundAttachment = 'fixed';
            yelan.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yelan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/yelan.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const shenheUser = () => {
    if(localStorage.getItem('shenheAvatar') !== 'comprado') {
        selectShenhe.classList.add('disabled');
        selectShenhe.setAttribute('disabled', 'true');
        shenhe.style.background = '#dd1440';
        shenhe.style.transition = '0.5s linear';
        setTimeout(() => {
            shenhe.style.background = "url('/icon/Background5.png')";
            shenhe.style.backgroundPosition = 'center';
            shenhe.style.backgroundRepeat = 'no-repeat';
            shenhe.style.backgroundSize = 'cover';
            shenhe.style.backgroundAttachment = 'fixed';
            shenhe.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#shenhe img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const audio = new Audio(); 
        const efeito = "./music/shenhe.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const ganyuUser = () => {
    if(localStorage.getItem('ganyuAvatar') !== 'comprado') {
        selectGanyu.classList.add('disabled');
        selectGanyu.setAttribute('disabled', 'true');
        ganyu.style.background = '#dd1440';
        ganyu.style.transition = '0.5s linear';
        setTimeout(() => {
            ganyu.style.background = "url('/icon/Background5.png')";
            ganyu.style.backgroundPosition = 'center';
            ganyu.style.backgroundRepeat = 'no-repeat';
            ganyu.style.backgroundSize = 'cover';
            ganyu.style.backgroundAttachment = 'fixed';
            ganyu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ganyu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/ganyu.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const qiqiUser = () => {
    if(localStorage.getItem('qiqiAvatar') !== 'comprado') {
        selectQiqi.classList.add('disabled');
        selectQiqi.setAttribute('disabled', 'true');
        qiqi.style.background = '#dd1440';
        qiqi.style.transition = '0.5s linear';
        setTimeout(() => {
            qiqi.style.background = "url('/icon/Background5.png')";
            qiqi.style.backgroundPosition = 'center';
            qiqi.style.backgroundRepeat = 'no-repeat';
            qiqi.style.backgroundSize = 'cover';
            qiqi.style.backgroundAttachment = 'fixed';
            qiqi.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#qiqi img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const audio = new Audio(); 
        const efeito = "./music/qiqi.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const baizhuUser = () => {
    if(localStorage.getItem('baizhuAvatar') !== 'comprado') {
        selectBaizhu.classList.add('disabled');
        selectBaizhu.setAttribute('disabled', 'true');
        baizhu.style.background = '#dd1440';
        baizhu.style.transition = '0.5s linear';
        setTimeout(() => {
            baizhu.style.background = "url('/icon/Background5.png')";
            baizhu.style.backgroundPosition = 'center';
            baizhu.style.backgroundRepeat = 'no-repeat';
            baizhu.style.backgroundSize = 'cover';
            baizhu.style.backgroundAttachment = 'fixed';
            baizhu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#baizhu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/baizhu.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const keqingUser = () => {
    if(localStorage.getItem('keqingAvatar') !== 'comprado') {
        selectKeqing.classList.add('disabled');
        selectKeqing.setAttribute('disabled', 'true');
        keqing.style.background = '#dd1440';
        keqing.style.transition = '0.5s linear';
        setTimeout(() => {
            keqing.style.background = "url('/icon/Background5.png')";
            keqing.style.backgroundPosition = 'center';
            keqing.style.backgroundRepeat = 'no-repeat';
            keqing.style.backgroundSize = 'cover';
            keqing.style.backgroundAttachment = 'fixed';
            keqing.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#keqing img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/keqing.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const yanfeiUser = () => {
    if(localStorage.getItem('yanfeiAvatar') !== 'comprado') {
        selectYanfei.classList.add('disabled');
        selectYanfei.setAttribute('disabled', 'true');
        yanfei.style.background = '#dd1440';
        yanfei.style.transition = '0.5s linear';
        setTimeout(() => {
            yanfei.style.background = "url('/icon/Background4.png')";
            yanfei.style.backgroundPosition = 'center';
            yanfei.style.backgroundRepeat = 'no-repeat';
            yanfei.style.backgroundSize = 'cover';
            yanfei.style.backgroundAttachment = 'fixed';
            yanfei.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yanfei img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/yanfei.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const yunjinUser = () => {
    if(localStorage.getItem('yunjinAvatar') !== 'comprado') {
        selectYunjin.classList.add('disabled');
        selectYunjin.setAttribute('disabled', 'true');
        yunjin.style.background = '#dd1440';
        yunjin.style.transition = '0.5s linear';
        setTimeout(() => {
            yunjin.style.background = "url('/icon/Background4.png')";
            yunjin.style.backgroundPosition = 'center';
            yunjin.style.backgroundRepeat = 'no-repeat';
            yunjin.style.backgroundSize = 'cover';
            yunjin.style.backgroundAttachment = 'fixed';
            yunjin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yunjin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const audio = new Audio();    
        const efeito = "./music/yunjin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const yaoyaoUser = () => {
    if(localStorage.getItem('yaoyaoAvatar') !== 'comprado') {
        selectYaoyao.classList.add('disabled');
        selectYaoyao.setAttribute('disabled', 'true');
        yaoyao.style.background = '#dd1440';
        yaoyao.style.transition = '0.5s linear';
        setTimeout(() => {
            yaoyao.style.background = "url('/icon/Background4.png')";
            yaoyao.style.backgroundPosition = 'center';
            yaoyao.style.backgroundRepeat = 'no-repeat';
            yaoyao.style.backgroundSize = 'cover';
            yaoyao.style.backgroundAttachment = 'fixed';
            yaoyao.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yaoyao img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/yaoyao.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const chongyunUser = () => {
    if(localStorage.getItem('chongyunAvatar') !== 'comprado') {
        selectChongyun.classList.add('disabled');
        selectChongyun.setAttribute('disabled', 'true');
        chongyun.style.background = '#dd1440';
        chongyun.style.transition = '0.5s linear';
        setTimeout(() => {
            chongyun.style.background = "url('/icon/Background4.png')";
            chongyun.style.backgroundPosition = 'center';
            chongyun.style.backgroundRepeat = 'no-repeat';
            chongyun.style.backgroundSize = 'cover';
            chongyun.style.backgroundAttachment = 'fixed';
            chongyun.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#chongyun img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const audio = new Audio();    
        const efeito = "./music/chongyun.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const beidouUser = () => {
    if(localStorage.getItem('beidouAvatar') !== 'comprado') {
        selectBeidou.classList.add('disabled');
        selectBeidou.setAttribute('disabled', 'true');
        beidou.style.background = '#dd1440';
        beidou.style.transition = '0.5s linear';
        setTimeout(() => {
            beidou.style.background = "url('/icon/Background4.png')";
            beidou.style.backgroundPosition = 'center';
            beidou.style.backgroundRepeat = 'no-repeat';
            beidou.style.backgroundSize = 'cover';
            beidou.style.backgroundAttachment = 'fixed';
            beidou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#beidou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/beidou.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const xianglingUser = () => {
    if(localStorage.getItem('xianglingAvatar') !== 'comprado') {
        selectXiangling.classList.add('disabled');
        selectXiangling.setAttribute('disabled', 'true');
        xiangling.style.background = '#dd1440';
        xiangling.style.transition = '0.5s linear';
        setTimeout(() => {
            xiangling.style.background = "url('/icon/Background4.png')";
            xiangling.style.backgroundPosition = 'center';
            xiangling.style.backgroundRepeat = 'no-repeat';
            xiangling.style.backgroundSize = 'cover';
            xiangling.style.backgroundAttachment = 'fixed';
            xiangling.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xiangling img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/xiangling.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const xingqiuUser = () => {
    if(localStorage.getItem('xingqiuAvatar') !== 'comprado') {
        selectXingqiu.classList.add('disabled');
        selectXingqiu.setAttribute('disabled', 'true');
        xingqiu.style.background = '#dd1440';
        xingqiu.style.transition = '0.5s linear';
        setTimeout(() => {
            xingqiu.style.background = "url('/icon/Background4.png')";
            xingqiu.style.backgroundPosition = 'center';
            xingqiu.style.backgroundRepeat = 'no-repeat';
            xingqiu.style.backgroundSize = 'cover';
            xingqiu.style.backgroundAttachment = 'fixed';
            xingqiu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xingqiu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/xingqiu.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const xinyanUser = () => {
    if(localStorage.getItem('xinyanAvatar') !== 'comprado') {
        selectXinyan.classList.add('disabled');
        selectXinyan.setAttribute('disabled', 'true');
        xinyan.style.background = '#dd1440';
        xinyan.style.transition = '0.5s linear';
        setTimeout(() => {
            xinyan.style.background = "url('/icon/Background4.png')";
            xinyan.style.backgroundPosition = 'center';
            xinyan.style.backgroundRepeat = 'no-repeat';
            xinyan.style.backgroundSize = 'cover';
            xinyan.style.backgroundAttachment = 'fixed';
            xinyan.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#xinyan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/xinyan.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const ningguangUser = () => {
    if(localStorage.getItem('ningguangAvatar') !== 'comprado') {
        selectNingguang.classList.add('disabled');
        selectNingguang.setAttribute('disabled', 'true');
        ningguang.style.background = '#dd1440';
        ningguang.style.transition = '0.5s linear';
        setTimeout(() => {
            ningguang.style.background = "url('/icon/Background4.png')";
            ningguang.style.backgroundPosition = 'center';
            ningguang.style.backgroundRepeat = 'no-repeat';
            ningguang.style.backgroundSize = 'cover';
            ningguang.style.backgroundAttachment = 'fixed';
            ningguang.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ningguang img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;
        const audio = new Audio();    
        const efeito = "./music/ningguang.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

//Inazuma

const selectThoma = document.querySelector('#thoma');
const selectSara = document.querySelector('#sara');
const selectSayu = document.querySelector('#sayu');
const selectKuki = document.querySelector('#kuki');
const selectGorou = document.querySelector('#gorou');
const selectHeizou = document.querySelector('#heizou');
const selectKirara = document.querySelector('#kirara');
const selectAyato = document.querySelector('#ayato');
const selectAyaka = document.querySelector('#ayaka');
const selectKokomi = document.querySelector('#kokomi');
const selectRaiden = document.querySelector('#raiden');
const selectKazuha = document.querySelector('#kazuha');
const selectArataki = document.querySelector('#arataki');
const selectYaemiko = document.querySelector('#yaemiko');
const selectYoimiya = document.querySelector('#yoimiya');

export const raidenUser = () => {
    if(localStorage.getItem('raidenAvatar') !== 'comprado') {
        selectRaiden.classList.add('disabled');
        selectRaiden.setAttribute('disabled', 'true');
        raiden.style.background = '#dd1440';
        raiden.style.transition = '0.5s linear';
        setTimeout(() => {
            raiden.style.background = "url('/icon/Background5.png')";
            raiden.style.backgroundPosition = 'center';
            raiden.style.backgroundRepeat = 'no-repeat';
            raiden.style.backgroundSize = 'cover';
            raiden.style.backgroundAttachment = 'fixed';
            raiden.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#raiden img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/raiden.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kazuhaUser = () => {
    if(localStorage.getItem('kazuhaAvatar') !== 'comprado') {
        selectKazuha.classList.add('disabled');
        selectKazuha.setAttribute('disabled', 'true');
        kazuha.style.background = '#dd1440';
        kazuha.style.transition = '0.5s linear';
        setTimeout(() => {
            kazuha.style.background = "url('/icon/Background5.png')";
            kazuha.style.backgroundPosition = 'center';
            kazuha.style.backgroundRepeat = 'no-repeat';
            kazuha.style.backgroundSize = 'cover';
            kazuha.style.backgroundAttachment = 'fixed';
            kazuha.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kazuha img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/kazuha.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const yaemikoUser = () => {
    if(localStorage.getItem('yaemikoAvatar') !== 'comprado') {
        selectYaemiko.classList.add('disabled');
        selectYaemiko.setAttribute('disabled', 'true');
        yaemiko.style.background = '#dd1440';
        yaemiko.style.transition = '0.5s linear';
        setTimeout(() => {
            yaemiko.style.background = "url('/icon/Background5.png')";
            yaemiko.style.backgroundPosition = 'center';
            yaemiko.style.backgroundRepeat = 'no-repeat';
            yaemiko.style.backgroundSize = 'cover';
            yaemiko.style.backgroundAttachment = 'fixed';
            yaemiko.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yaemiko img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/yaemiko.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const yoimiyaUser = () => {
    if(localStorage.getItem('yoimiyaAvatar') !== 'comprado') {
        selectYoimiya.classList.add('disabled');
        selectYoimiya.setAttribute('disabled', 'true');
        yoimiya.style.background = '#dd1440';
        yoimiya.style.transition = '0.5s linear';
        setTimeout(() => {
            yoimiya.style.background = "url('/icon/Background5.png')";
            yoimiya.style.backgroundPosition = 'center';
            yoimiya.style.backgroundRepeat = 'no-repeat';
            yoimiya.style.backgroundSize = 'cover';
            yoimiya.style.backgroundAttachment = 'fixed';
            yoimiya.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#yoimiya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/yoimiya.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const ayakaUser = () => {
    if(localStorage.getItem('ayakaAvatar') !== 'comprado') {
        selectAyaka.classList.add('disabled');
        selectAyaka.setAttribute('disabled', 'true');
        ayaka.style.background = '#dd1440';
        ayaka.style.transition = '0.5s linear';
        setTimeout(() => {
            ayaka.style.background = "url('/icon/Background5.png')";
            ayaka.style.backgroundPosition = 'center';
            ayaka.style.backgroundRepeat = 'no-repeat';
            ayaka.style.backgroundSize = 'cover';
            ayaka.style.backgroundAttachment = 'fixed';
            ayaka.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ayaka img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/ayaka.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const aratakiUser = () => {
    if(localStorage.getItem('aratakiAvatar') !== 'comprado') {
        selectArataki.classList.add('disabled');
        selectArataki.setAttribute('disabled', 'true');
        arataki.style.background = '#dd1440';
        arataki.style.transition = '0.5s linear';
        setTimeout(() => {
            arataki.style.background = "url('/icon/Background5.png')";
            arataki.style.backgroundPosition = 'center';
            arataki.style.backgroundRepeat = 'no-repeat';
            arataki.style.backgroundSize = 'cover';
            arataki.style.backgroundAttachment = 'fixed';
            arataki.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#arataki img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/arataki.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kokomiUser = () => {
    if(localStorage.getItem('kokomiAvatar') !== 'comprado') {
        selectKokomi.classList.add('disabled');
        selectKokomi.setAttribute('disabled', 'true');
        kokomi.style.background = '#dd1440';
        kokomi.style.transition = '0.5s linear';
        setTimeout(() => {
            kokomi.style.background = "url('/icon/Background5.png')";
            kokomi.style.backgroundPosition = 'center';
            kokomi.style.backgroundRepeat = 'no-repeat';
            kokomi.style.backgroundSize = 'cover';
            kokomi.style.backgroundAttachment = 'fixed';
            kokomi.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kokomi img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/kokomi.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const ayatoUser = () => {
    if(localStorage.getItem('ayatoAvatar') !== 'comprado') {
        selectAyato.classList.add('disabled');
        selectAyato.setAttribute('disabled', 'true');
        ayato.style.background = '#dd1440';
        ayato.style.transition = '0.5s linear';
        setTimeout(() => {
            ayato.style.background = "url('/icon/Background5.png')";
            ayato.style.backgroundPosition = 'center';
            ayato.style.backgroundRepeat = 'no-repeat';
            ayato.style.backgroundSize = 'cover';
            ayato.style.backgroundAttachment = 'fixed';
            ayato.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ayato img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/ayato.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kiraraUser = () => {
    if(localStorage.getItem('kiraraAvatar') !== 'comprado') {
        selectKirara.classList.add('disabled');
        selectKirara.setAttribute('disabled', 'true');
        kirara.style.background = '#dd1440';
        kirara.style.transition = '0.5s linear';
        setTimeout(() => {
            kirara.style.background = "url('/icon/Background4.png')";
            kirara.style.backgroundPosition = 'center';
            kirara.style.backgroundRepeat = 'no-repeat';
            kirara.style.backgroundSize = 'cover';
            kirara.style.backgroundAttachment = 'fixed';
            kirara.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kirara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/kirara.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const heizouUser = () => {
    if(localStorage.getItem('heizouAvatar') !== 'comprado') {
        selectHeizou.classList.add('disabled');
        selectHeizou.setAttribute('disabled', 'true');
        heizou.style.background = '#dd1440';
        heizou.style.transition = '0.5s linear';
        setTimeout(() => {
            heizou.style.background = "url('/icon/Background4.png')";
            heizou.style.backgroundPosition = 'center';
            heizou.style.backgroundRepeat = 'no-repeat';
            heizou.style.backgroundSize = 'cover';
            heizou.style.backgroundAttachment = 'fixed';
            heizou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#heizou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/heizou.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kukiUser = () => {
    if(localStorage.getItem('kukiAvatar') !== 'comprado') {
        selectKuki.classList.add('disabled');
        selectKuki.setAttribute('disabled', 'true');
        kuki.style.background = '#dd1440';
        kuki.style.transition = '0.5s linear';
        setTimeout(() => {
            kuki.style.background = "url('/icon/Background4.png')";
            kuki.style.backgroundPosition = 'center';
            kuki.style.backgroundRepeat = 'no-repeat';
            kuki.style.backgroundSize = 'cover';
            kuki.style.backgroundAttachment = 'fixed';
            kuki.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kuki img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/kuki.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const gorouUser = () => {
    if(localStorage.getItem('gorouAvatar') !== 'comprado') {
        selectGorou.classList.add('disabled');
        selectGorou.setAttribute('disabled', 'true');
        gorou.style.background = '#dd1440';
        gorou.style.transition = '0.5s linear';
        setTimeout(() => {
            gorou.style.background = "url('/icon/Background4.png')";
            gorou.style.backgroundPosition = 'center';
            gorou.style.backgroundRepeat = 'no-repeat';
            gorou.style.backgroundSize = 'cover';
            gorou.style.backgroundAttachment = 'fixed';
            gorou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#gorou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/gorou.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const sayuUser = () => {
    if(localStorage.getItem('sayuAvatar') !== 'comprado') {
        selectSayu.classList.add('disabled');
        selectSayu.setAttribute('disabled', 'true');
        sayu.style.background = '#dd1440';
        sayu.style.transition = '0.5s linear';
        setTimeout(() => {
            sayu.style.background = "url('/icon/Background4.png')";
            sayu.style.backgroundPosition = 'center';
            sayu.style.backgroundRepeat = 'no-repeat';
            sayu.style.backgroundSize = 'cover';
            sayu.style.backgroundAttachment = 'fixed';
            sayu.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sayu img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/sayu.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const saraUser = () => {
    if(localStorage.getItem('saraAvatar') !== 'comprado') {
        selectSara.classList.add('disabled');
        selectSara.setAttribute('disabled', 'true');
        sara.style.background = '#dd1440';
        sara.style.transition = '0.5s linear';
        setTimeout(() => {
            sara.style.background = "url('/icon/Background4.png')";
            sara.style.backgroundPosition = 'center';
            sara.style.backgroundRepeat = 'no-repeat';
            sara.style.backgroundSize = 'cover';
            sara.style.backgroundAttachment = 'fixed';
            sara.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#sara img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/sara.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const thomaUser = () => {
    if(localStorage.getItem('thomaAvatar') !== 'comprado') {
        selectThoma.classList.add('disabled');
        selectThoma.setAttribute('disabled', 'true');
        thoma.style.background = '#dd1440';
        thoma.style.transition = '0.5s linear';
        setTimeout(() => {
            thoma.style.background = "url('/icon/Background4.png')";
            thoma.style.backgroundPosition = 'center';
            thoma.style.backgroundRepeat = 'no-repeat';
            thoma.style.backgroundSize = 'cover';
            thoma.style.backgroundAttachment = 'fixed';
            thoma.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#thoma img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/thoma.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

//Sumeru

const selectCandace = document.querySelector('#candace');
const selectFaruzan = document.querySelector('#faruzan');
const selectLayla = document.querySelector('#layla');
const selectKaveh = document.querySelector('#kaveh');
const selectDori = document.querySelector('#dori');
const selectCollei = document.querySelector('#collei');
const selectNilou = document.querySelector('#nilou');
const selectTighnari = document.querySelector('#tighnari');
const selectAlhaitham = document.querySelector('#alhaitham');
const selectWanderer = document.querySelector('#wanderer');
const selectNahida = document.querySelector('#nahida');
const selectCyno = document.querySelector('#cyno');
const selectDehya = document.querySelector('#dehya');

export const dehyaUser = () => {
    if(localStorage.getItem('dehyaAvatar') !== 'comprado') {
        selectDehya.classList.add('disabled');
        selectDehya.setAttribute('disabled', 'true');
        dehya.style.background = '#dd1440';
        dehya.style.transition = '0.5s linear';
        setTimeout(() => {
            dehya.style.background = "url('/icon/Background5.png')";
            dehya.style.backgroundPosition = 'center';
            dehya.style.backgroundRepeat = 'no-repeat';
            dehya.style.backgroundSize = 'cover';
            dehya.style.backgroundAttachment = 'fixed';
            dehya.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#dehya img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/dehya.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const cynoUser = () => {
    if(localStorage.getItem('cynoAvatar') !== 'comprado') {
        selectCyno.classList.add('disabled');
        selectCyno.setAttribute('disabled', 'true');
        cyno.style.background = '#dd1440';
        cyno.style.transition = '0.5s linear';
        setTimeout(() => {
            cyno.style.background = "url('/icon/Background5.png')";
            cyno.style.backgroundPosition = 'center';
            cyno.style.backgroundRepeat = 'no-repeat';
            cyno.style.backgroundSize = 'cover';
            cyno.style.backgroundAttachment = 'fixed';
            cyno.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#cyno img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/cyno.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const nahidaUser = () => {
    if(localStorage.getItem('nahidaAvatar') !== 'comprado') {
        selectNahida.classList.add('disabled');
        selectNahida.setAttribute('disabled', 'true');
        nahida.style.background = '#dd1440';
        nahida.style.transition = '0.5s linear';
        setTimeout(() => {
            nahida.style.background = "url('/icon/Background5.png')";
            nahida.style.backgroundPosition = 'center';
            nahida.style.backgroundRepeat = 'no-repeat';
            nahida.style.backgroundSize = 'cover';
            nahida.style.backgroundAttachment = 'fixed';
            nahida.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#nahida img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/nahida.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const wandererUser = () => {
    if(localStorage.getItem('wandererAvatar') !== 'comprado') {
        selectWanderer.classList.add('disabled');
        selectWanderer.setAttribute('disabled', 'true');
        wanderer.style.background = '#dd1440';
        wanderer.style.transition = '0.5s linear';
        setTimeout(() => {
            wanderer.style.background = "url('/icon/Background5.png')";
            wanderer.style.backgroundPosition = 'center';
            wanderer.style.backgroundRepeat = 'no-repeat';
            wanderer.style.backgroundSize = 'cover';
            wanderer.style.backgroundAttachment = 'fixed';
            wanderer.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#wanderer img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/wanderer.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const alhaithamUser = () => {
    if(localStorage.getItem('alhaithamAvatar') !== 'comprado') {
        selectAlhaitham.classList.add('disabled');
        selectAlhaitham.setAttribute('disabled', 'true');
        alhaitham.style.background = '#dd1440';
        alhaitham.style.transition = '0.5s linear';
        setTimeout(() => {
            alhaitham.style.background = "url('/icon/Background5.png')";
            alhaitham.style.backgroundPosition = 'center';
            alhaitham.style.backgroundRepeat = 'no-repeat';
            alhaitham.style.backgroundSize = 'cover';
            alhaitham.style.backgroundAttachment = 'fixed';
            alhaitham.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#alhaitham img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/alhaitham.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const nilouUser = () => {
    if(localStorage.getItem('nilouAvatar') !== 'comprado') {
        selectNilou.classList.add('disabled');
        selectNilou.setAttribute('disabled', 'true');
        nilou.style.background = '#dd1440';
        nilou.style.transition = '0.5s linear';
        setTimeout(() => {
            nilou.style.background = "url('/icon/Background5.png')";
            nilou.style.backgroundPosition = 'center';
            nilou.style.backgroundRepeat = 'no-repeat';
            nilou.style.backgroundSize = 'cover';
            nilou.style.backgroundAttachment = 'fixed';
            nilou.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#nilou img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/nilou.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const tighnariUser = () => {
    if(localStorage.getItem('tighnariAvatar') !== 'comprado') {
        selectTighnari.classList.add('disabled');
        selectTighnari.setAttribute('disabled', 'true');
        tighnari.style.background = '#dd1440';
        tighnari.style.transition = '0.5s linear';
        setTimeout(() => {
            tighnari.style.background = "url('/icon/Background5.png')";
            tighnari.style.backgroundPosition = 'center';
            tighnari.style.backgroundRepeat = 'no-repeat';
            tighnari.style.backgroundSize = 'cover';
            tighnari.style.backgroundAttachment = 'fixed';
            tighnari.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#tighnari img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/tighnari.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const colleiUser = () => {
    if(localStorage.getItem('colleiAvatar') !== 'comprado') {
        selectCollei.classList.add('disabled');
        selectCollei.setAttribute('disabled', 'true');
        collei.style.background = '#dd1440';
        collei.style.transition = '0.5s linear';
        setTimeout(() => {
            collei.style.background = "url('/icon/Background4.png')";
            collei.style.backgroundPosition = 'center';
            collei.style.backgroundRepeat = 'no-repeat';
            collei.style.backgroundSize = 'cover';
            collei.style.backgroundAttachment = 'fixed';
            collei.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#collei img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/collei.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const doriUser = () => {
    if(localStorage.getItem('doriAvatar') !== 'comprado') {
        selectDori.classList.add('disabled');
        selectDori.setAttribute('disabled', 'true');
        dori.style.background = '#dd1440';
        dori.style.transition = '0.5s linear';
        setTimeout(() => {
            dori.style.background = "url('/icon/Background4.png')";
            dori.style.backgroundPosition = 'center';
            dori.style.backgroundRepeat = 'no-repeat';
            dori.style.backgroundSize = 'cover';
            dori.style.backgroundAttachment = 'fixed';
            dori.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#dori img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/dori.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const kavehUser = () => {
    if(localStorage.getItem('kavehAvatar') !== 'comprado') {
        selectKaveh.classList.add('disabled');
        selectKaveh.setAttribute('disabled', 'true');
        kaveh.style.background = '#dd1440';
        kaveh.style.transition = '0.5s linear';
        setTimeout(() => {
            kaveh.style.background = "url('/icon/Background4.png')";
            kaveh.style.backgroundPosition = 'center';
            kaveh.style.backgroundRepeat = 'no-repeat';
            kaveh.style.backgroundSize = 'cover';
            kaveh.style.backgroundAttachment = 'fixed';
            kaveh.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kaveh img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/kaveh.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const laylaUser = () => {
    if(localStorage.getItem('laylaAvatar') !== 'comprado') {
        selectLayla.classList.add('disabled');
        selectLayla.setAttribute('disabled', 'true');
        layla.style.background = '#dd1440';
        layla.style.transition = '0.5s linear';
        setTimeout(() => {
            layla.style.background = "url('/icon/Background4.png')";
            layla.style.backgroundPosition = 'center';
            layla.style.backgroundRepeat = 'no-repeat';
            layla.style.backgroundSize = 'cover';
            layla.style.backgroundAttachment = 'fixed';
            layla.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#layla img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/layla.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const faruzanUser = () => {
    if(localStorage.getItem('faruzanAvatar') !== 'comprado') {
        selectFaruzan.classList.add('disabled');
        selectFaruzan.setAttribute('disabled', 'true');
        faruzan.style.background = '#dd1440';
        faruzan.style.transition = '0.5s linear';
        setTimeout(() => {
            faruzan.style.background = "url('/icon/Background4.png')";
            faruzan.style.backgroundPosition = 'center';
            faruzan.style.backgroundRepeat = 'no-repeat';
            faruzan.style.backgroundSize = 'cover';
            faruzan.style.backgroundAttachment = 'fixed';
            faruzan.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#faruzan img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/faruzan.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const candaceUser = () => {
    if(localStorage.getItem('candaceAvatar') !== 'comprado') {
        selectCandace.classList.add('disabled');
        selectCandace.setAttribute('disabled', 'true');
        candace.style.background = '#dd1440';
        candace.style.transition = '0.5s linear';
        setTimeout(() => {
            candace.style.background = "url('/icon/Background4.png')";
            candace.style.backgroundPosition = 'center';
            candace.style.backgroundRepeat = 'no-repeat';
            candace.style.backgroundSize = 'cover';
            candace.style.backgroundAttachment = 'fixed';
            candace.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#candace img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const audio = new Audio(); 
        const efeito = "./music/candace.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

//Fontaine

const selectNeuvillette = document.querySelector('#neuvillette');
const selectFurina = document.querySelector('#furina');
const selectWriothesley = document.querySelector('#wriothesley');
const selectLyney = document.querySelector('#lyney');
const selectCharlotte = document.querySelector('#charlotte');
const selectFreminet = document.querySelector('#freminet');
const selectLynette = document.querySelector('#lynette');
const selectNavia = document.querySelector('#navia');
const selectChevreuse = document.querySelector('#chevreuse');

export const wriothesleyUser = () => {
    if(localStorage.getItem('wriothesleyAvatar') !== 'comprado') {
        selectWriothesley.classList.add('disabled');
        selectWriothesley.setAttribute('disabled', 'true');
        wriothesley.style.background = '#dd1440';
        wriothesley.style.transition = '0.5s linear';
        setTimeout(() => {
            wriothesley.style.background = "url('/icon/Background5.png')";
            wriothesley.style.backgroundPosition = 'center';
            wriothesley.style.backgroundRepeat = 'no-repeat';
            wriothesley.style.backgroundSize = 'cover';
            wriothesley.style.backgroundAttachment = 'fixed';
            wriothesley.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#wriothesley img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/wriothesley.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const naviaUser = () => {
    if(localStorage.getItem('naviaAvatar') !== 'comprado') {
        selectNavia.classList.add('disabled');
        selectNavia.setAttribute('disabled', 'true');
        navia.style.background = '#dd1440';
        navia.style.transition = '0.5s linear';
        setTimeout(() => {
            navia.style.background = "url('/icon/Background5.png')";
            navia.style.backgroundPosition = 'center';
            navia.style.backgroundRepeat = 'no-repeat';
            navia.style.backgroundSize = 'cover';
            navia.style.backgroundAttachment = 'fixed';
            navia.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#navia img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/navia.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const furinaUser = () => {
    if(localStorage.getItem('furinaAvatar') !== 'comprado') {
        selectFurina.classList.add('disabled');
        selectFurina.setAttribute('disabled', 'true');
        furina.style.background = '#dd1440';
        furina.style.transition = '0.5s linear';
        setTimeout(() => {
            furina.style.background = "url('/icon/Background5.png')";
            furina.style.backgroundPosition = 'center';
            furina.style.backgroundRepeat = 'no-repeat';
            furina.style.backgroundSize = 'cover';
            furina.style.backgroundAttachment = 'fixed';
            furina.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#furina img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/furina.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const neuvilletteUser = () => {
    if(localStorage.getItem('neuvilletteAvatar') !== 'comprado') {
        selectNeuvillette.classList.add('disabled');
        selectNeuvillette.setAttribute('disabled', 'true');
        neuvillette.style.background = '#dd1440';
        neuvillette.style.transition = '0.5s linear';
        setTimeout(() => {
            neuvillette.style.background = "url('/icon/Background5.png')";
            neuvillette.style.backgroundPosition = 'center';
            neuvillette.style.backgroundRepeat = 'no-repeat';
            neuvillette.style.backgroundSize = 'cover';
            neuvillette.style.backgroundAttachment = 'fixed';
            neuvillette.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#neuvillette img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/neuvillette.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const lyneyUser = () => {
    if(localStorage.getItem('lyneyAvatar') !== 'comprado') {
        selectLyney.classList.add('disabled');
        selectLyney.setAttribute('disabled', 'true');
        lyney.style.background = '#dd1440';
        lyney.style.transition = '0.5s linear';
        setTimeout(() => {
            lyney.style.background = "url('/icon/Background5.png')";
            lyney.style.backgroundPosition = 'center';
            lyney.style.backgroundRepeat = 'no-repeat';
            lyney.style.backgroundSize = 'cover';
            lyney.style.backgroundAttachment = 'fixed';
            lyney.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lyney img').src;
        document.querySelector('#imgPerfil img').src = imgSelect; 
        const audio = new Audio();   
        const efeito = "./music/lyney.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const charlotteUser = () => {
    if(localStorage.getItem('charlotteAvatar') !== 'comprado') {
        selectCharlotte.classList.add('disabled');
        selectCharlotte.setAttribute('disabled', 'true');
        charlotte.style.background = '#dd1440';
        charlotte.style.transition = '0.5s linear';
        setTimeout(() => {
            charlotte.style.background = "url('/icon/Background4.png')";
            charlotte.style.backgroundPosition = 'center';
            charlotte.style.backgroundRepeat = 'no-repeat';
            charlotte.style.backgroundSize = 'cover';
            charlotte.style.backgroundAttachment = 'fixed';
            charlotte.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#charlotte img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/charlotte.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const freminetUser = () => {
    if(localStorage.getItem('freminetAvatar') !== 'comprado') {
        selectFreminet.classList.add('disabled');
        selectFreminet.setAttribute('disabled', 'true');
        freminet.style.background = '#dd1440';
        freminet.style.transition = '0.5s linear';
        setTimeout(() => {
            freminet.style.background = "url('/icon/Background4.png')";
            freminet.style.backgroundPosition = 'center';
            freminet.style.backgroundRepeat = 'no-repeat';
            freminet.style.backgroundSize = 'cover';
            freminet.style.backgroundAttachment = 'fixed';
            freminet.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#freminet img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;   
        const audio = new Audio(); 
        const efeito = "./music/freminet.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const lynetteUser = () => {
    if(localStorage.getItem('lynetteAvatar') !== 'comprado') {
        selectLynette.classList.add('disabled');
        selectLynette.setAttribute('disabled', 'true');
        lynette.style.background = '#dd1440';
        lynette.style.transition = '0.5s linear';
        setTimeout(() => {
            lynette.style.background = "url('/icon/Background4.png')";
            lynette.style.backgroundPosition = 'center';
            lynette.style.backgroundRepeat = 'no-repeat';
            lynette.style.backgroundSize = 'cover';
            lynette.style.backgroundAttachment = 'fixed';
            lynette.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lynette img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/lynette.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

export const chevreuseUser = () => {
    if(localStorage.getItem('chevreuseAvatar') !== 'comprado') {
        selectChevreuse.classList.add('disabled');
        selectChevreuse.setAttribute('disabled', 'true');
        chevreuse.style.background = '#dd1440';
        chevreuse.style.transition = '0.5s linear';
        setTimeout(() => {
            chevreuse.style.background = "url('/icon/Background4.png')";
            chevreuse.style.backgroundPosition = 'center';
            chevreuse.style.backgroundRepeat = 'no-repeat';
            chevreuse.style.backgroundSize = 'cover';
            chevreuse.style.backgroundAttachment = 'fixed';
            chevreuse.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#chevreuse img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;  
        const audio = new Audio();  
        const efeito = "./music/chevreuse.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

//Snezhnaya

const selectTartaglia = document.querySelector('#tartaglia');

export const tartagliaUser = () => {
    if(localStorage.getItem('tartagliaAvatar') !== 'comprado') {
        selectTartaglia.classList.add('disabled');
        selectTartaglia.setAttribute('disabled', 'true');
        tartaglia.style.background = '#dd1440';
        tartaglia.style.transition = '0.5s linear';
        setTimeout(() => {
            tartaglia.style.background = "url('/icon/Background5.png')";
            tartaglia.style.backgroundPosition = 'center';
            tartaglia.style.backgroundRepeat = 'no-repeat';
            tartaglia.style.backgroundSize = 'cover';
            tartaglia.style.backgroundAttachment = 'fixed';
            tartaglia.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#tartaglia img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/tartaglia.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

//Skins

const selectDilucSkin = document.querySelector('#dilucSkin');
const selectJeanSkin = document.querySelector('#jeanSkin');
const selectKleeSkin = document.querySelector('#kleeSkin');
const selectAyakaSkin = document.querySelector('#ayakaSkin');
const selectBarbaraSkin = document.querySelector('#barbaraSkin');
const selectFischlSkin = document.querySelector('#fischlSkin');
const selectNingguangSkin = document.querySelector('#ningguangSkin');
const selectKeqingSkin = document.querySelector('#keqingSkin');
const selectLisaSkin = document.querySelector('#lisaSkin');
const selectKaeyaSkin = document.querySelector('#kaeyaSkin');


// Diluc Skin
export const dilucSkinUser = () => {
    if(localStorage.getItem('dilucSkinAvatar') !== 'comprado') {
        selectDilucSkin.classList.add('disabled');
        selectDilucSkin.setAttribute('disabled', 'true');
        dilucSkin.style.background = '#dd1440';
        dilucSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            dilucSkin.style.background = "url('/icon/Background5.png')";
            dilucSkin.style.backgroundPosition = 'center';
            dilucSkin.style.backgroundRepeat = 'no-repeat';
            dilucSkin.style.backgroundSize = 'cover';
            dilucSkin.style.backgroundAttachment = 'fixed';
            dilucSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#dilucSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/dilucSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Jean Skin
export const jeanSkinUser = () => {
    if(localStorage.getItem('jeanSkinAvatar') !== 'comprado') {
        selectJeanSkin.classList.add('disabled');
        selectJeanSkin.setAttribute('disabled', 'true');
        jeanSkin.style.background = '#dd1440';
        jeanSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            jeanSkin.style.background = "url('/icon/Background5.png')";
            jeanSkin.style.backgroundPosition = 'center';
            jeanSkin.style.backgroundRepeat = 'no-repeat';
            jeanSkin.style.backgroundSize = 'cover';
            jeanSkin.style.backgroundAttachment = 'fixed';
            jeanSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#jeanSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/jeanSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Klee Skin
export const kleeSkinUser = () => {
    if(localStorage.getItem('kleeSkinAvatar') !== 'comprado') {
        selectKleeSkin.classList.add('disabled');
        selectKleeSkin.setAttribute('disabled', 'true');
        kleeSkin.style.background = '#dd1440';
        kleeSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            kleeSkin.style.background = "url('/icon/Background5.png')";
            kleeSkin.style.backgroundPosition = 'center';
            kleeSkin.style.backgroundRepeat = 'no-repeat';
            kleeSkin.style.backgroundSize = 'cover';
            kleeSkin.style.backgroundAttachment = 'fixed';
            kleeSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kleeSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/kleeSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Ayaka Skin
export const ayakaSkinUser = () => {
    if(localStorage.getItem('ayakaSkinAvatar') !== 'comprado') {
        selectAyakaSkin.classList.add('disabled');
        selectAyakaSkin.setAttribute('disabled', 'true');
        ayakaSkin.style.background = '#dd1440';
        ayakaSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            ayakaSkin.style.background = "url('/icon/Background5.png')";
            ayakaSkin.style.backgroundPosition = 'center';
            ayakaSkin.style.backgroundRepeat = 'no-repeat';
            ayakaSkin.style.backgroundSize = 'cover';
            ayakaSkin.style.backgroundAttachment = 'fixed';
            ayakaSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ayakaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/ayakaSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Barbara Skin
export const barbaraSkinUser = () => {
    if(localStorage.getItem('barbaraSkinAvatar') !== 'comprado') {
        selectBarbaraSkin.classList.add('disabled');
        selectBarbaraSkin.setAttribute('disabled', 'true');
        barbaraSkin.style.background = '#dd1440';
        barbaraSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            barbaraSkin.style.background = "url('/icon/Background5.png')";
            barbaraSkin.style.backgroundPosition = 'center';
            barbaraSkin.style.backgroundRepeat = 'no-repeat';
            barbaraSkin.style.backgroundSize = 'cover';
            barbaraSkin.style.backgroundAttachment = 'fixed';
            barbaraSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#barbaraSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/barbaraSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Fischl Skin
export const fischlSkinUser = () => {
    if(localStorage.getItem('fischlSkinAvatar') !== 'comprado') {
        selectFischlSkin.classList.add('disabled');
        selectFischlSkin.setAttribute('disabled', 'true');
        fischlSkin.style.background = '#dd1440';
        fischlSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            fischlSkin.style.background = "url('/icon/Background5.png')";
            fischlSkin.style.backgroundPosition = 'center';
            fischlSkin.style.backgroundRepeat = 'no-repeat';
            fischlSkin.style.backgroundSize = 'cover';
            fischlSkin.style.backgroundAttachment = 'fixed';
            fischlSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#fischlSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/fischlSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Ningguang Skin
export const ningguangSkinUser = () => {
    if(localStorage.getItem('ningguangSkinAvatar') !== 'comprado') {
        selectNingguangSkin.classList.add('disabled');
        selectNingguangSkin.setAttribute('disabled', 'true');
        ningguangSkin.style.background = '#dd1440';
        ningguangSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            ningguangSkin.style.background = "url('/icon/Background5.png')";
            ningguangSkin.style.backgroundPosition = 'center';
            ningguangSkin.style.backgroundRepeat = 'no-repeat';
            ningguangSkin.style.backgroundSize = 'cover';
            ningguangSkin.style.backgroundAttachment = 'fixed';
            ningguangSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#ningguangSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/ningguangSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Keqing Skin
export const keqingSkinUser = () => {
    if(localStorage.getItem('keqingSkinAvatar') !== 'comprado') {
        selectKeqingSkin.classList.add('disabled');
        selectKeqingSkin.setAttribute('disabled', 'true');
        keqingSkin.style.background = '#dd1440';
        keqingSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            keqingSkin.style.background = "url('/icon/Background5.png')";
            keqingSkin.style.backgroundPosition = 'center';
            keqingSkin.style.backgroundRepeat = 'no-repeat';
            keqingSkin.style.backgroundSize = 'cover';
            keqingSkin.style.backgroundAttachment = 'fixed';
            keqingSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#keqingSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/keqingSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Lisa Skin
export const lisaSkinUser = () => {
    if(localStorage.getItem('lisaSkinAvatar') !== 'comprado') {
        selectLisaSkin.classList.add('disabled');
        selectLisaSkin.setAttribute('disabled', 'true');
        lisaSkin.style.background = '#dd1440';
        lisaSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            lisaSkin.style.background = "url('/icon/Background5.png')";
            lisaSkin.style.backgroundPosition = 'center';
            lisaSkin.style.backgroundRepeat = 'no-repeat';
            lisaSkin.style.backgroundSize = 'cover';
            lisaSkin.style.backgroundAttachment = 'fixed';
            lisaSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#lisaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/lisaSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};

// Kaeya Skin
export const kaeyaSkinUser = () => {
    if(localStorage.getItem('kaeyaSkinAvatar') !== 'comprado') {
        selectKaeyaSkin.classList.add('disabled');
        selectKaeyaSkin.setAttribute('disabled', 'true');
        kaeyaSkin.style.background = '#dd1440';
        kaeyaSkin.style.transition = '0.5s linear';
        setTimeout(() => {
            kaeyaSkin.style.background = "url('/icon/Background5.png')";
            kaeyaSkin.style.backgroundPosition = 'center';
            kaeyaSkin.style.backgroundRepeat = 'no-repeat';
            kaeyaSkin.style.backgroundSize = 'cover';
            kaeyaSkin.style.backgroundAttachment = 'fixed';
            kaeyaSkin.style.transition = '0.5s linear';
        }, 2000);
    } else {
        let imgSelect = document.querySelector('#kaeyaSkin img').src;
        document.querySelector('#imgPerfil img').src = imgSelect;    
        const audio = new Audio();
        const efeito = "./music/kaeyaSkin.ogg";
        audio.src = efeito;
        audio.play();  
    }
};
