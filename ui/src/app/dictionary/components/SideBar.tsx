import React from 'react'
import 'antd/dist/antd.css'
import { Menu, Switch, Divider } from 'antd'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import JoinLeftIcon from '@mui/icons-material/JoinLeft'
import EmojiObjectsSharpIcon from '@mui/icons-material/EmojiObjectsSharp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import { t } from 'i18next'
const SideBar = () => {

    return (
        <>
            <Menu
                style={{ width: 280, paddingTop: 80, paddingLeft: 18, fontSize: 25 }}
                mode={'vertical'}

            >
                <Menu.Item key="1" icon={<LocalLibraryIcon />}>
                    {t('SideBar.definition')} {<ArrowForwardIosSharpIcon />}
                </Menu.Item>
                <Menu.Item key="2" icon={<InsertPhotoIcon />}>
                    {t('SideBar.picture')}  {<ArrowForwardIosSharpIcon />}
                </Menu.Item>
                <Menu.Item key="3" icon={<JoinLeftIcon />}>
                    {t('SideBar.synonym')}  {<ArrowForwardIosSharpIcon />}
                </Menu.Item>
                <Menu.Item key="4" icon={<EmojiObjectsSharpIcon />}>
                    {t('SideBar.example')}   {<ArrowForwardIosSharpIcon />}
                </Menu.Item>
            </Menu>
        </>
    )
}
export default SideBar