import { useLocalSearchParams, useRouter, useSearchParams, Stack } from 'expo-router';
import React, {useCallback, useState} from 'react'
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';

import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';

import useFetch from 'hook/useFetch';
import { IJob } from 'types/job';

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {

  console.log("job detail render: ");
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const {data, isLoading, error, refetch} = useFetch('job-details', {job_id: id as string, extended_publisher_details: 'false'})

  const [refreshing, setRefreshing] = useState(false);

  console.log("data fetching job detail: ", data);

  const jobDetail = (data as IJob[])[0];

  const onRefresh = () => {}


  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return <Specifics title="Qualifications" points={jobDetail.job_highlights.Qualifications ?? ['N/A']}/>

      case 'About':
        return <JobAbout description={jobDetail.job_description ?? "No Data provided"}/>  

      case 'Responsibilities':
        
        break;
    
      default:

        break;
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen options={{
        headerStyle: {backgroundColor: COLORS.gray}, 
        headerShadowVisible: false,
         headerBackVisible: false,
         headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()}/>
         ),
         headerRight: () => (
          <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
         ),
         headerTitle: ""
         }}
         >

      <Text style={{textAlign: 'center', marginTop: 20}}>Job Detail with #{id}</Text>
      </Stack.Screen>
      <>
         <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            {isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : (error ? (<Text>Something went wrong</Text>): (data as IJob[]).length === 0 ? (<Text>No Data</Text>): <View style={{padding: SIZES.medium, paddingBottom: 100}}>
              <Company 
                companyLogo={jobDetail.employer_logo}
                jobTitle={jobDetail.job_title}
                companyName={jobDetail.employer_name}
                location={jobDetail.job_country}

              />

              <JobTabs 
                  tabs={tabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
              />

            {displayTabContent()}

            </View>)}
         </ScrollView>
      </>
    </SafeAreaView>
  )
}

export default JobDetails
