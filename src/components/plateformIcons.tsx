import {Icon,HStack} from'@chakra-ui/react';
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';



interface props{

iconData:platform[],

}

const plateformIcons = ({iconData}:props) => {
const iconMap:{[key:string]:IconType}={

pc:FaWindows,
playstation:FaPlaystation,
xbox:FaXbox,
nintendo:SiNintendo,
mac:FaApple,
linux:FaLinux,
android:FaAndroid,
ios:MdPhoneIphone,
web:BsGlobe
}
  return (
    <HStack>
  {iconData.map((platform)=>(
<Icon key={platform.slug} my="10px" as={iconMap[platform.slug]} color='gray.500'  />
))}
    </HStack>
  )
}

export default plateformIcons;
