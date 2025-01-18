import EventDay from '../components/EventDay';
export default function events() {
    return(
	<section id="schedule" className="containerr my-10 oultine outline-white">
		<div className=" flex justify-center mb-5"><SectionHeader title={'Schedule'} /></div>
		<EventDay />
	</section>
);
}