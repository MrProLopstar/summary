import {Component,Fragment} from 'react';
import {Img} from 'react-image';
import {Panel, View, Root, AppRoot,PanelHeader,ConfigProvider,Gradient,Avatar,Footnote,Group,Button,RichCell,Header,FormItem,Div,SimpleCell, ButtonGroup,Gallery} from '@vkontakte/vkui';
import {Icon28SchoolOutline,Icon24CircleSmall,Icon24TriangleOutline,Icon24ArrowUpRightOutline,Icon24LogoVk} from '@vkontakte/icons';
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import rikl from './rikl.jpg';
import avatar from './avatar.png';
import aniclap from './aniclap.jpg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  async componentDidMount(){
  }
  render(){
    const styles = {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 10,
      padding: 10
    };
    let now = new Date(),  today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dob = new Date(2004, 7, 22), dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age  = today.getFullYear() - dob.getFullYear();
    if(today<dobnow) age = age-1;
    return(
      <ConfigProvider scheme='space_gray'>
        <AppRoot>
          <Root activeView='main'>
            <View id='main' activePanel='main'>
              <Panel id='main'>
                <PanelHeader>Резюме</PanelHeader>
                <Gradient to="top" style={styles}>
                  <RichCell
                    disabled
                    before={<Avatar size={80} src={avatar}/>}
                    caption={age+(age%10==1 ? ' год' : (age%10==2 || age%10==3 || age%10==4 ? ' года' : ' лет'))+', 22.07.2004'}
                  >Гостяев Ярослав Витальевич</RichCell>
                </Gradient>
                <Group header={<Header>О себе</Header>}>
                  <Div>
                    <Footnote>
                      Студент 2 курса направления "Программного инженерия". В свободное время пишу проекты для себя. Я использую: ReactJS, NodeJS, MongoDB.
                    </Footnote>
                  </Div>
                </Group>
                <Group header={<Header>Образование</Header>}>
                  {[{chil:'Школа №507, г. Санкт-Петербург', capt:'Среднее общее', aftcapt:'2011-2022', icon: <Icon28SchoolOutline color='purple' style={{marginTop:10}}/>},
                  {chil:'МГУ им.Н.П.Огарёва, г. Саранск', capt:'Неполное высшее (бакалавриат)', aftcapt:'2022-н.в.', text:'Специальность: Программный инженер', icon: <Icon28SchoolOutline color='green' style={{marginTop:10}}/>},
                  {chil:'МГУ им.Н.П.Огарёва, г. Саранск', capt:'Цифровая кафедра, дополнительное образование', aftcapt:'2023-н.в. (1 год)', text:'Специальность: Data Science', icon: <Icon28SchoolOutline color='red' style={{marginTop:10}}/>}].map(x => (
                    <RichCell
                      disabled
                      multiline
                      before={x.icon}
                      afterCaption={x.aftcapt}
                      text={x.text}
                      caption={x.capt}
                    >{x.chil}</RichCell>
                  ))}
                </Group>
                <Group header={<Header>Навыки</Header>}>
                  {[{chil:'Основной язык программирования: JavaScript', sub:'Знаком с: С++, C#, Python, Java', icon: <Icon24TriangleOutline width={10} height={10}/>},
                  {chil:'NodeJS', sub:'Писал: ботов VK/Telegram, парсеры, REST API', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'ReactJS', sub:'Умею делать интерфейсы используя стороние библиотеки, бэкенд пишу на ура', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'MongoDB', sub:'Хорошо умею работать с MongoDB (noSQL), опыт работы с SQL - отсутствует, но легко восполним', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'CloudFlare+Nginx', sub:'Умею настраивать DNS и проксирование запросов', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'Linux', sub:'Администрировать Linux, умею работать с диспетчером процессов PM2', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'Docker', sub:'Умею пользоваться Docker, есть минимальные навыки создания своих контейнеров', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'Git', sub:'Ни разу не работал в команде, так что присутствует опыт использование Git в одного', icon: <Icon24CircleSmall width={10} height={10}/>}].map(x => (
                    <SimpleCell
                      disabled
                      multiline
                      before={x.icon}
                      subtitle={x.sub}
                    >{x.chil}</SimpleCell>
                  ))}
                </Group>
                <Group header={<Header>Проекты</Header>}>
                  {[{chil: 'Bot Rikl', capt: 'Игровой бот VK', after: '2019-2020', icon: <Avatar src={rikl}/>, actions: <ButtonGroup mode='horizontal' gap='s'>
                    <Button mode='secondary' onClick={() => window.open('https://vk.com/bot_rikl')}>Открыть группу VK</Button>
                    <Button mode='secondary' onClick={() => window.open('https://github.com/MrProLopstar/BotRikl')}>Открыть на GitHub</Button>
                  </ButtonGroup>},
                  {chil:'AniClap', capt:'Сборник Опенингов, эндингов и саундтрэков аниме. Код скрыт в приватном репозитории, запрашивается отдельно.', after:'2021-н.в.', icon: <Avatar src={aniclap}/>, actions: <ButtonGroup mode='horizontal' gap='s'>
                    <Button mode='secondary' onClick={() => window.open('https://vk.com/app7474595')}>VK MiniApp (old)</Button>
                    <Button mode='secondary' onClick={() => window.open('https://vk.com/app517841785')}>VK MiniApp (test)</Button>
                    <Button mode='secondary' onClick={() => window.open('https://admin.aniclap.ru')}>Admin Panel</Button>
                    <Button mode='secondary' onClick={() => window.open('https://github.com/aniclap')}>Открыть на GitHub</Button>
                  </ButtonGroup>, images: [
                    'https://i.ibb.co/G7hkDTQ/chrome-v-WOFw8-HVoz.png',
                    'https://i.ibb.co/VMMBwt7/image.png',
                    'https://i.ibb.co/qkYyDjX/scr.png',
                    'https://i.ibb.co/4MNgkDP/chrome-jfi-P1-UDZz-S.png',
                    'https://i.ibb.co/XWQgv1b/chrome-9-Aln-ETr7kt.png',
                    'https://i.ibb.co/wRRt9mz/chrome-Veg-Vlwsxu-E.png'
                  ]}].map(x => (
                    <Fragment>
                      <RichCell
                        disabled
                        multiline
                        caption={x.capt}
                        before={x.icon}
                        afterCaption={x.after}
                        bottom={x.bottom}
                        actions={x.actions}
                      >{x.chil}</RichCell>
                      {x.images && <Gallery initialSlideIndex='2' isDraggable slideWidth={window.innerWidth<500 ? '60%' : "500px"} align="center">
                        {x.images.map((img,i) => <Img src={img} style={{objectFit: 'contain', objectPosition: 'center', borderRadius: 10}}/>)}
                      </Gallery>}
                    </Fragment>
                  ))}
                </Group>
                <Group header={<Header>Контакты</Header>}>
                  {[{chil:'Почта', sub:'gosyar@gmail.com', icon: <MdEmail size={24}/>, after: <Icon24ArrowUpRightOutline/>, url: 'mailto:gosyar@gmail.com'},
                  {chil:'Телеграм', sub:'@mrpolopstar', icon: <FaTelegramPlane size={24}/>, after: <Icon24ArrowUpRightOutline/>, url: 'https://t.me/mrprolopstar'},
                  {chil:'VK', sub:'@mrpolopstar', icon: <Icon24LogoVk/>, after: <Icon24ArrowUpRightOutline/>, url: 'https://vk.me/mrprolopstar'},
                  {chil:'Discord', sub:'@lop', icon: <SiDiscord size={24}/>, after: <Icon24ArrowUpRightOutline/>, url: 'https://discord.com/users/375686018839478273'},
                  {chil:'GitHub', sub:'@MrProLopstar', icon: <BsGithub size={24}/>, after: <Icon24ArrowUpRightOutline/>, url: 'https://github.com/MrProLopstar'},
                  {chil:'Dobro.ru', sub:'Волонтёрский профиль', icon: <Avatar size={24} src='https://s129vla.storage.yandex.net/rdisk/8e447e17fa089c65859218de7e86be2150e851d213c8a7b7ae382bbdfdfd1d3e/65a08032/ytZkkbW2lvZXqcPmRND2NXW7aHWHbpnmnjzmJZGCY950iMoK9EBFdxQEpxNc4mRIwStZKWMQkL_itsneZkatWg==?uid=0&filename=%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8%20%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D1%80%D1%83%20RGB_5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=4824&hid=97025cc655ebc59c88bcdeb6c7ce8c74&media_type=image&tknv=v2&etag=737156a2d0860f6cc1ad6d9d29be876b&rtoken=vEuVZgVRIT8x&force_default=no&ycrid=na-7a737a5d0f30bf42bc60352ae49c7fc2-downloader15e&ts=60eb44c1af080&s=44ff09c03e7d60650938ad833252200eff5647e3b42a70dd3486905f0be8977c&pb=U2FsdGVkX1-hAqKHd5byCR_-jcGsKhMnJn1v4FZbjq3-rKbtFD1jgShjpjSuICf1Gus4fXfYQFPBGefTGND9B4IdKhyxwwNN6QY-_aQPkOk'/>, after: <Icon24ArrowUpRightOutline/>, url: 'https://dobro.ru/volunteers/93763004'}].map(x => (
                    <SimpleCell
                      multiline
                      before={x.icon}
                      after={x.after}
                      subtitle={x.sub}
                      onClick={() => window.open(x.url)}
                      style={x.style}
                    >{x.chil}</SimpleCell>
                  ))}
                </Group>
              </Panel>
            </View>
          </Root>
        </AppRoot>
      </ConfigProvider>
    )
  }
};

export default App;