import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import {icons} from '../../../constants';
import { checkImageUrl } from 'utils';

const Company = ({companyLogo, jobTitle, companyName, location}: {companyLogo: string, jobTitle: string, companyName: string, location: string}) => {
  return (
    <View>
      <Text>Company</Text>
      <View style={styles.logoBox}>
        <Image 
        source={{uri: checkImageUrl(companyLogo) ? companyLogo : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'}}
        style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName}</Text>
          <View style={styles.locationBox}>
            <Image source={icons.location} style={styles.locationImage} resizeMethod='contain' />
            <Text style={styles.locationName}>{location}</Text>
          </View>
      </View>

    </View>
  )
}

export default Company