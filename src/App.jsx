import {Component} from 'react';
import {Panel, View, Root, AppRoot,PanelHeader,ConfigProvider,Gradient,Avatar,Footnote,Group,Button,RichCell,Header,FormItem,Div,SimpleCell} from '@vkontakte/vkui';
import {Icon28SchoolOutline,Icon24CircleSmall,Icon24TriangleOutline} from '@vkontakte/icons';
import avatar from './avatar.png';

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
                  <RichCell
                    disabled
                    multiline
                    before={<Icon28SchoolOutline color='purple' style={{marginTop:10}}/>}
                    afterCaption='2011-2022'
                    caption='Среднее общее'
                  >Школа №507, г. Санкт-Петербург</RichCell>
                  <RichCell
                    disabled
                    multiline
                    before={<Icon28SchoolOutline color='green' style={{marginTop:15}}/>}
                    afterCaption='2022-н.в.'
                    text='Специальность: Программный инженер'
                    caption='Неполное высшее (бакалавриат)'
                  >МГУ им.Н.П.Огарёва</RichCell>
                </Group>
                <Group header={<Header>Навыки</Header>}>
                  {[{chil:'Основной язык программирования: JavaScript', sub:'Знаком с: С++, C#, Python, Java', icon: <Icon24TriangleOutline width={10} height={10}/>},
                  {chil:'NodeJS', sub:'Писал: ботов VK/Telegram, парсеры, REST API', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'ReactJS', sub:'Умею делать интерфейсы используя стороние библиотеки, бэкенд пишу на ура', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'MongoDB', sub:'Хорошо умею работать с MongoDB (noSQL), опыт работы с SQL - отсутствует, но легко восполним', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'CloudFlare+Nginx', sub:'Умею настраивать DNS и проксирование запросов', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'Linux', sub:'Администрировать Linux, умею работать с диспетчером процессов PM2', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'Docker', sub:'Умею пользоваться Docker, есть минимальные навыки создания своих контейнеров', icon: <Icon24CircleSmall width={10} height={10}/>},
                  {chil:'Git', sub:'Ни разу не работал в команде, т.ч. присутствует опыт использование Git в одного', icon: <Icon24CircleSmall width={10} height={10}/>}].map(x => (
                    <SimpleCell
                      disabled
                      multiline
                      before={x.icon}
                      subtitle={x.sub}
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