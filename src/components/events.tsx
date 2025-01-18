import EventDay from '../components/EventDay';
import SectionHeader from './SectionHeader';
export default function events() {
    return(
	<section id="schedule" className="containerr my-10 oultine outline-white justify-center">

		<h1 className="flex justify-center mb-5 bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Schedule
        </h1>
		{/*
		<div className=" flex justify-center w-full mb-5"><SectionHeader title={'Schedule'} /></div>
		*/}
		<EventDay />
	</section>
);
}
