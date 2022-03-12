import React from "react";
import qualityServiceImg from "../../images/dental.jpg";
import teeth1 from "../../images/teeth1.jpg";
import stetoskop  from "../../images/stetoskop.jpg";
import { YMaps,Map } from 'react-yandex-maps'

const AboutDetails = () => {
  return (
    <>
      <div className="container lg:flex py-16">
        <div className="h-full lg:w-2/3 w-full">
          <img className="w-full" src={qualityServiceImg} alt="" />
        </div>
        <div className="lg:ml-8"> 

          <h1 className="text-3xl font-Poppins font-semibold">
          КЛИНИКА АЙГЕРИМ СЕГОДНЯ 
          </h1>
          <h1 className="text-3xl font-Poppins font-semibold">
          МИССИЯ
          </h1>
          <h1 className="text-3xl font-Poppins font-semibold">
          ОКАЗАНИЕ ВЫСОКОКВАЛИФИЦИРОВАННОЙ ПЛАТНОЙ МЕДИЦИНСКОЙ ПОМОЩИ ОБЩЕСТВУ, В КОТОРОМ МЫ ЖИВЕМ.
          </h1>
          <p className="py-8">
          Клиника «Айгерим» - это крупнейшая частная медицинская компания в Актюбинской области,  с опытом работы более 25 лет.  Более 700 сотрудников ежедневно обслуживают сотни клиентов и компаний. Клиника располагает современным оборудованием от ведущих иностранных производителей, высококвалифицированным персоналом с большим стажем работы, а также нами применяются современные методы управления и обслуживания клиентов.</p>
          <br/>
          
          </div>
          </div>
          <div className="container">
          <p >
          <strong>КЛЮЧЕВЫЕ ЦЕННОСТИ –</strong> наши общие ценности, «во что на самом деле мы верим»
          <br/>
         
          </p>
          <ul>
              <li >Мы занимаемся бизнесом, главной целью, которой является сохранение и улучшение здоровья человека. Все наши действия должны измеряться успехом в достижении этой цели, победой над болезнями и их предотвращение;</li>
              <li >Медицина для людей, а не ради прибыли;</li>
              <li >Отлично выполнять свою работу и отлично относиться к своим пациентам. И делать это лучше всех;</li>
              <li >Последовательные непрерывные внутренние изменения – безостановочно, безоглядно, бесконечно;</li>
              <li >Создавать внутреннюю атмосферу, способствующую созданию высококачественных услуг и внедрению инноваций. Стимулировать прогресс.</li>
          </ul>
          <br/>
          
          <strong><h4>ЦЕЛЬ</h4></strong>

          <ul>
          <li><strong>Стать №1 в области медицины в Казахстане</strong>, посредством инноваций и подготовки профессиональных кадров! Создать самую лучшую медицинскую компанию в национальном и международном масштабе, какую только возможно;</li>
          <li>Создать условия труда, при которых медработники с радостью выполняли бы свою работу, осознавали свою миссию и предавались труду всем сердцем;</li>
          <li>Применять передовые технологии на благо людей. Постоянно идти вперед, постоянно расти и развиваться.</li>
          </ul>
         
         <h2> Хирургическое отделение в клинике Айгерим по ул.Пацаева 7/1:</h2><br/>
         <iframe src="https://www.youtube.com/embed/dkYxqTnJdps" width="100%" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br/>
<h2> КЛИНИКА АЙГЕРИМ ПО УЛ.ШЕРНИЯЗА 35:</h2><br/>
<iframe src="https://www.youtube.com/embed/kvk9KbKOu0g" width="100%" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br/>
<h2>Лаборатория Клиники Айгерим:</h2><br/>
<iframe src="https://www.youtube.com/embed/fB3UK8p02d0" width="100%" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<br/>
<h2> <h2>Компьютерная томография в клинике Айгерим по ул.Пацаева 7/1:</h2></h2><br/>
<iframe src="//www.youtube.com/embed/wTMOCY7KvO8" width="560" height="314" allowfullscreen="allowfullscreen"></iframe>
<br/>
<h2><h2>Клиника Айгерим по ул.Маресьева 87:</h2></h2><br/>
<iframe src="//www.youtube.com/embed/eBSco_tEi3o" width="560" height="314" allowfullscreen="allowfullscreen"></iframe>
<br/>
<p>В нашу команду требуются<br/></p>

<p>1. Фармацевт аптеки, график работы 2/2;<br/>2. Медицинская сестра гинекологического кабинета;<br/>3. Медицинская сестра неврологического кабинета;<br/>4. Медицинская сестра эндоскопического кабинета;<br/>5. Бухгалтер (виртуального склада);<br/>6. Санитарки (технички)<br/>Обращаться по адресу: ул.Маресьева д.87, кабинет 405/1 в отдел кадров или по телефону в рабочее время 8 701 068 87 50</p>
<p><br/>Email:&nbsp;<a href="mailto:hrmanager1@aigerim.info">hrmanager1@aigerim.info</a></p>


<p>обновлено: 09.03.2022г.</p>
 <YMaps>
 <div >
      <Map width="100%" height="315" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
    
  </YMaps>

</div>
          
    </>
  );
};

export default AboutDetails;
