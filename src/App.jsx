import {Component} from 'react';
import {Panel, View, Root, AppRoot,PanelHeader,ConfigProvider,Gradient,Avatar,Title,Group,Button,RichCell} from '@vkontakte/vkui';
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
                    before={<Avatar size={96} src={avatar}/>}
                    caption={age+(age%10==1 ? ' год' : (age%10==2 || age%10==3 || age%10==4 ? ' года' : ' лет'))+', 22.07.2004'}
                  >Гостяев Ярослав Витальевич</RichCell>
                </Gradient>
                <Group header='Образование'>
                  <RichCell
                    disabled
                    
                  >

                  </RichCell>
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