import React from 'react'
import 'antd/dist/antd.css'
import { Menu, Switch, Divider } from 'antd'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import JoinLeftIcon from '@mui/icons-material/JoinLeft'
import EmojiObjectsSharpIcon from '@mui/icons-material/EmojiObjectsSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { useTranslation } from 'react-i18next'
const SideBar = () => {
  const { t } = useTranslation('common')
  return (
        <>
            <Menu
                style={{ width: 280, padding: '80px 0px', fontSize: 25 }}
                mode={'vertical'}
            >
                <Menu.Item key="1" icon={<LocalLibraryIcon style={{ fontSize:'28px' }} />} style={{ margin:'18px 0px', color:'#264653', padding:'0px 25px' }}>
                    {t('SideBar.definition')} {<ArrowForwardIosSharpIcon style={{ marginLeft:'29px' }}/>}
                </Menu.Item>
                <Menu.Item key="2" icon={<InsertPhotoIcon style={{ fontSize:'28px' }}/>} style={{ margin:'18px 0px', color:'#264653', padding:'0px 25px' }}>
                    {t('SideBar.picture')}  {<ArrowForwardIosSharpIcon style={{ marginLeft:'47px' }}/>}
                </Menu.Item>
                <Menu.Item key="3" icon={<JoinLeftIcon style={{ fontSize:'28px' }}/>} style={{ margin:'18px 0px', color:'#264653', padding:'0px 25px' }}>
                    {t('SideBar.synonym')}  {<ArrowForwardIosSharpIcon style={{ marginLeft:'22px' }}/>}
                </Menu.Item>
                <Menu.Item key="4" icon={<EmojiObjectsSharpIcon style={{ fontSize:'28px' }}/>} style={{ margin:'18px 0px', color:'#264653', padding:'0px 25px' }}>
                    {t('SideBar.example')}   {<ArrowForwardIosSharpIcon style={{ marginLeft:'30px' }}/>}
                </Menu.Item>
            </Menu>
        </>
  )
}
export default SideBar