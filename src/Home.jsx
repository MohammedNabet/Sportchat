import React from "react";
import "./Home.css";
import Publication from "./Publication";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import Posthome from "./Posthome";
import PropTypes from "prop-types";

const Home = ({ user }) => {
  const [statusUsers, setStatusUsers] = React.useState([
    {
      id: 1,
      name: "Club Mas",
      avatarUrl: "./maslogo.jpg",
    },
    {
      id: 2,
      name: "Raje Club",
      avatarUrl: "./rajae.jpg",
    },
    {
      id: 3,
      name: "club WAC",
      avatarUrl: "./wedad.jpg",
    },
    {
      id: 4,
      name: "WIRT",
      avatarUrl: "./tanja.jpg",
    },
    {
      id: 5,
      name: "Manchester",
      avatarUrl: "./man.jpg",
    },
    {
      id: 6,
      name: "ASFAR",
      avatarUrl: "./far.jpg",
    },
  ]);

  const posts = [
    {
      id: 1,
      profileImage: "./maslogo.jpg",
      profileName: "Maghreb Association Sportive de Fès",
      timeAgo: "1 week ago",
      postText: "C'est la fin de notre campagne",
      hashtags: "#CoupeduTrone #MASASFAR",
      postImage: "./masmatch.jpg",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "MAS vs ASFAR",
    },
    {
      id: 2,
      profileImage: "./rajae.jpg",
      profileName: "Raja Club Athletic",
      timeAgo: "1 week ago",
      postText: "Une journée que nous n'oublierons jamais 💚🏆",
      hashtags: "#Rajae #AppSport",
      postImage: "./postrajae.jpg",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "Rajae",
    },
    {
      id: 3,
      profileImage: "./inwi.jpeg",
      profileName: "Inwi",
      timeAgo: "1 week ago",
      postText:
        "inwi fait vivre aux supporters les grands moments du football mondial avec une « Fan Zone » dédiée pour soutenir l’équipe nationale et des offres exceptionnelles",
      hashtags: "#inwiclub #Football",
      postImage: "./iwi.jpeg",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "FAN ZONE",
    },
    {
      id: 4,
      profileImage: "./Tanja.jpg",
      profileName: "WIRT - Ittihad Riadi De Tanger",
      timeAgo: "1 week ago",
      postText: `خلال اجتماعه ليوم الاحد 30 يونيو 2024 على الساعة السادسة مساءا، بمركب الحاج محمد بنجلون، خلص المكتب المديري لنادي الوداد الرياضي الى القرارات التالية:
بخصوص الاستقالات التي وردت على المكتب المديري 
- قبول استقالة السيد عبد المجيد برناكي من منصب رئيس المكتب المديري 
- رفض استقالة السيد المهدي الزوات من رئاسة فرع كرة اليد، والسادة هشام ملاخ مصطفى ملوكي وبناني عبد الله من عضوية المكتب المديري 
بخصوص وضع فرع كرة القدم وتفاديا للتأخر الذي يمكن أن يعرفه التحضير للموسم المقبل
- تعيين السيد هشام ايت منا رئيسا منتدبا لفرع كرة القدم خلال هذه الفترة الانتقالية الى حين تسوية وضعية الجموع العامة لانتخاب رئيس ومكتب جديدين. وفي هذا الاطار، يود المكتب المديري التوضيح بشأن هذا الاختيار الذي جاء بناءا على مشاورات مع مجموعة من الفعاليات التي أجمعت على خبرة ورغبة السيد ايت منا للمساهمة في انجاح هذه المرحلة وعدم تضييع الوقت. كما أنه يود التأكيد على تساوي حظوظ جميع المرشحين في المنافسة على رئاسة نادي الوداد الرياضي. 
بخصوص الوضع التنظيمي وانتخاب رئيس جديد، فطبقا للمقتضيات القانونية الواردة في النظام الأساسي والمتعلقة بحالة الشغور، فسيتحمل باقي أعضاء المكتب المديري مسؤوليته تحت إشراف السيد ادريس حاسا بصفته نائبا أولا للرئيس المستقيل إلى حين انعقاد الجمع العام العادي الانتخابي كما تنص على ذلك الفقرة الرابعة من المادة 23 من النظام الأساسي النموذجي، وفي هذا الإطار قرر المكتب المديري:
- إلغاء الجمع العام المجمع تنظيمه يوم 03 يوليوز 2023
- إلغاء فتح باب الترشيح الذي كان قد أعلن على فتحه سلفا من طرف الرئيس السابق
- تنظيم جمع عام غير عادي يوم 15 يوليوز 2024، ليتسنى للمكتب المديري الدعوة إليه طبقا للشكليات المنصوص عليها قانونا وذلك للتداول في المصادقة النهائية على استقالة الرئيس،  والمصادقة على إمكانية ترشح المنخرطين الجدد نظرا لرغبة مجموعة من هذه الفئة في المنافسة على رئاسة النادي بمشاريع ولوائح غنية ومختلفة.
- الدعوة لعقد جمع عام عادي انتخابي يوم 24 يوليوز 2024 مع الاعلان عن فتح باب الترشيح حسب الشروط الشكلية المنصوص عليها في الفقرة الثانية من المادة 23 من النظام الأساسي النموذجي.`,
      hashtags: "#Rajae #AppSport",
      postImage: "",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "Rajae",
    },
    {
      id: 5,
      profileImage: "./FAR.jpg",
      profileName: "Association Sportive des Forces Armées Royales - ASFAR",
      timeAgo: "1 week ago",
      postText: "شكرا إغمان خريج أكاديمية الزعيم وحظا موفقا في تجربتك الجديدة ",
      hashtags: "#ASFAR #IGAMANE",
      postImage: "./farpost.jpg",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "GOOD LUCK / FAR",
    },
    {
      id: 6,
      profileImage: "./wedad.jpg",
      profileName: "Wydad Athletic Club - WAC",
      timeAgo: "1 week ago",
      postText: `خلال اجتماعه ليوم الاحد 30 يونيو 2024 على الساعة السادسة مساءا، بمركب الحاج محمد بنجلون، خلص المكتب المديري لنادي الوداد الرياضي الى القرارات التالية:
بخصوص الاستقالات التي وردت على المكتب المديري 
- قبول استقالة السيد عبد المجيد برناكي من منصب رئيس المكتب المديري 
- رفض استقالة السيد المهدي الزوات من رئاسة فرع كرة اليد، والسادة هشام ملاخ مصطفى ملوكي وبناني عبد الله من عضوية المكتب المديري 
بخصوص وضع فرع كرة القدم وتفاديا للتأخر الذي يمكن أن يعرفه التحضير للموسم المقبل
- تعيين السيد هشام ايت منا رئيسا منتدبا لفرع كرة القدم خلال هذه الفترة الانتقالية الى حين تسوية وضعية الجموع العامة لانتخاب رئيس ومكتب جديدين. وفي هذا الاطار، يود المكتب المديري التوضيح بشأن هذا الاختيار الذي جاء بناءا على مشاورات مع مجموعة من الفعاليات التي أجمعت على خبرة ورغبة السيد ايت منا للمساهمة في انجاح هذه المرحلة وعدم تضييع الوقت. كما أنه يود التأكيد على تساوي حظوظ جميع المرشحين في المنافسة على رئاسة نادي الوداد الرياضي. 
بخصوص الوضع التنظيمي وانتخاب رئيس جديد، فطبقا للمقتضيات القانونية الواردة في النظام الأساسي والمتعلقة بحالة الشغور، فسيتحمل باقي أعضاء المكتب المديري مسؤوليته تحت إشراف السيد ادريس حاسا بصفته نائبا أولا للرئيس المستقيل إلى حين انعقاد الجمع العام العادي الانتخابي كما تنص على ذلك الفقرة الرابعة من المادة 23 من النظام الأساسي النموذجي، وفي هذا الإطار قرر المكتب المديري:
- إلغاء الجمع العام المجمع تنظيمه يوم 03 يوليوز 2023
- إلغاء فتح باب الترشيح الذي كان قد أعلن على فتحه سلفا من طرف الرئيس السابق
- تنظيم جمع عام غير عادي يوم 15 يوليوز 2024، ليتسنى للمكتب المديري الدعوة إليه طبقا للشكليات المنصوص عليها قانونا وذلك للتداول في المصادقة النهائية على استقالة الرئيس،  والمصادقة على إمكانية ترشح المنخرطين الجدد نظرا لرغبة مجموعة من هذه الفئة في المنافسة على رئاسة النادي بمشاريع ولوائح غنية ومختلفة.
- الدعوة لعقد جمع عام عادي انتخابي يوم 24 يوليوز 2024 مع الاعلان عن فتح باب الترشيح حسب الشروط الشكلية المنصوص عليها في الفقرة الثانية من المادة 23 من النظام الأساسي النموذجي.`,
      hashtags: "#Rajae #AppSport",
      postImage: "",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "Rajae",
    },
    {
      id: 7,
      profileImage: "./man.jpg",
      profileName: "Manchester United",
      timeAgo: "1 week ago",
      postText:
        "Un premier but international pour Licha 🤩🇦🇷 Notre défenseur a marqué alors que AFA - Selección Argentina a réservé sa place en demi-finale Copa América ! 👊🏆",
      hashtags: "#Manchester #app",
      postImage: "./manpost.jpg",
      views: "123,344,893",
      likes: "45,876",
      shares: "45,876",
      title: "Match Highlight",
    },
  ];

  const UserListItem = ({ user }) => (
    <div className="userItem">
      <img src={user.avatarUrl} alt="Avatar" className="avatar" />
      <span className="statusUserName">{user.name}</span>
    </div>
  );

  const PostCard = ({ post }) => (
    <div className="postCard">
      <div className="postHeader">
        <img src={post.profileImage} alt="Avatar" className="postAvatar" />
        <span className="postUsername">{post.profileName}</span>
        <span className="postDate">{post.timeAgo}</span>
      </div>
      <p className="postDescription">{post.postText}</p>
      {post.postImage && (
        <img src={post.postImage} alt="Post" className="postImage" />
      )}
      <div className="postFooter">
        <button className="postButton">Like</button>
        <button className="postButton">Comment</button>
        <button className="postButton">Share</button>
      </div>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
        <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
          <a
            className="text-xl font-semibold text-gray-800 font-heading"
            href="#"
          >
           <img src="./name.png" alt="" className="w-28" />
          </a>
        </div>
        <div className="block lg:hidden">
          <div className="flex">
            <IoNotificationsSharp className="mb-1 text-4xl text-gray-500 mt-1 p-2" />
            <FaMessage className="mb-1 text-4xl text-gray-500 mt-1 p-2" />
          </div>
        </div>
        <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Home
          </a>
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Team
          </a>
          <a
            className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Gallery
          </a>
        </div>
        <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Content
          </a>
          <a
            className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            FAQ
          </a>
          <a
            className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
            href="#"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="userContainer">
        {statusUsers.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </div>

      <Publication />

      <Posthome posts={posts} />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Home;
