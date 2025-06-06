import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "EVENT_BOOKING": "Event Booking",
          "EVENTS": "Events",
          "LOGIN": "Login",
          "LOGOUT": "Logout",
          "REGISTER": "Register",
          "ADMIN_PANEL": "Admin Panel",
          "MY_BOOKINGS": "My Bookings",

          "USERNAME": "Username",
          "EMAIL": "Email",
          "PASSWORD": "Password",
          "CONFIRM_PASSWORD": "Confirm Password",
          "CREATING_ACCOUNT": "Creating Account...",
          "REGISTER_BUTTON": "Register",
          "LOGIN_BUTTON": "Login",
          "PASS_NOT_MATCH": "Passwords do not match",
          "PASS_VALIDATION": "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.",
          "FAILED_TO_CREATE_ACCOUNT": "Failed to create account",
          "FAILED_TO_LOGIN": "Failed to login",

          "CREATE_EVENT": "Create Event",
          "CREATE_NEW_EVENT": "Create New Event",
          "EDIT_EVENT": "Edit Event",
          "DELETE_EVENT": "Delete Event",
          "VIEW_EVENT": "View Event",
          "BOOK_EVENT": "Book Event",
          "EVENT_TITLE": "Event Title",
          "EVENT_DESCRIPTION": "Description",
          "EVENT_DATE": "Date",
          "EVENT_TIME": "Time",
          "EVENT_LOCATION": "Location",
          "EVENT_PRICE": "Price",
          "EVENT_CATEGORY": "Category",
          "EVENT_IMAGE": "Event Image",
          "EVENT_CAPACITY": "Capacity",
          "EVENT_STATUS": "Status",
          "EVENT_ACTIONS": "Actions",
          "EVENT_DETAILS": "Event Details",
          "EVENT_BOOKED": "Event Booked",
          "EVENT_SOLD_OUT": "Sold Out",
          "EVENT_AVAILABLE": "Available",
          "EVENT_CANCELLED": "Cancelled",
          "EVENT_PENDING": "Pending",
          "EVENT_CONFIRMED": "Confirmed",
          "VIEW_DETAILS": "View Details",
          "BOOK_NOW": "Book Now",
          "BOOKED": "Booked",
          "EDIT": "Edit",
          "DELETE": "Delete",
          "SELECT_CATEGORY": "Select Category",
          "CATEGORY_MUSIC": "Music",
          "CATEGORY_SPORTS": "Sports",
          "CATEGORY_ARTS": "Arts & Theater",
          "CATEGORY_FOOD": "Food & Drink",
          "CATEGORY_BUSINESS": "Business",
          "CATEGORY_TECHNOLOGY": "Technology",
          "UPDATE_EVENT": "Update Event",
          "UPDATING_EVENT": "Updating Event...",
          "EVENT_UPDATED": "Event Updated Successfully",
          "EVENT_DELETED": "Event Deleted Successfully",

          "SUBMIT": "Submit",
          "CANCEL": "Cancel",
          "SAVE": "Save",
          "BACK": "Back",
          "NEXT": "Next",
          "PREVIOUS": "Previous",
          "FIRST": "First",
          "LAST": "Last",
          "LOADING": "Loading...",
          "ERROR": "Error",
          "SUCCESS": "Success",
          "WARNING": "Warning",
          "INFO": "Information",
          "CONFIRM": "Confirm",
          "ARE_YOU_SURE": "Are you sure?",
          "YES": "Yes",
          "NO": "No",
          "WELCOME": "Welcome",
          "WELCOME_BACK": "Welcome back",
          "READY_TO_EXPLORE": "Ready to explore more events?",
          "BROWSE_EVENTS": "Browse Events",
          "SIGN_UP": "Sign Up",
          "DISCOVER_EVENTS": "Discover and book amazing events in your area",
          "EASY_BOOKING": "Easy Booking",
          "WIDE_SELECTION": "Wide Selection",
          "SECURE_PAYMENTS": "Secure Payments",
          "BOOK_FAVORITE_EVENTS": "Book your favorite events with just a few clicks",
          "CHOOSE_EVENTS": "Choose from a variety of events and categories",
          "SAFE_PAYMENT": "Safe and secure payment processing",
          "SHOWING_EVENTS": "Showing {{count}} of {{total}} events",
          "PAGE_INFO": "Page {{current}} of {{total}}",

          "PREVIEW": "Preview",
          
          "ENTER_EVENT_NAME": "Enter event name",
          "ENTER_EVENT_DESCRIPTION": "Enter event description",
          "ENTER_EVENT_LOCATION": "Enter event location",
          "ENTER_EVENT_PRICE": "Enter event price",
          
          "CREATE_EVENT": "Create Event",
          "EDIT_EVENT": "Edit Event",
          "UPDATE_EVENT": "Update Event",
          
          "CREATING_EVENT": "Creating Event...",
          
          "CREATE_NEW_EVENT": "Create New Event",
          "FILL_EVENT_DETAILS": "Fill in the details to create a new event",
          "UPDATE_EVENT_DETAILS": "Update the event details below",
          
          "CATEGORY_MUSIC": "Music",
          "CATEGORY_SPORTS": "Sports",
          "CATEGORY_ARTS & THEATER": "Arts & Theater",
          "CATEGORY_FOOD & DRINK": "Food & Drink",
          "CATEGORY_BUSINESS": "Business",
          "CATEGORY_TECHNOLOGY": "Technology",
          "CATEGORY_HEALTH & WELLNESS": "Health & Wellness",
          "CATEGORY_FAMILY": "Family",

          'ADMIN_PANEL_TITLE': 'Admin Panel',
          'CREATE_NEW_EVENT': 'Create New Event',
          'EVENT_NAME': 'Event Name',
          'EVENT_CATEGORY': 'Category',
          'EVENT_DATE': 'Date',
          'EVENT_LOCATION': 'Location',
          'EVENT_PRICE': 'Price',
          'EVENT_ACTIONS': 'Actions',
          'IMAGE_REQUIRED': 'Image is required for new events',
          'FAILED_TO_LOAD_EVENTS': 'Failed to load events',
          'FAILED_TO_DELETE_EVENT': 'Failed to delete event',
          'FAILED_TO_SAVE_EVENT': 'Failed to save event',
          'AUTHENTICATION_REQUIRED': 'Authentication required',
          'EVENT_NOT_FOUND': 'Event not found',
          'INVALID_EVENT_ID': 'Invalid event ID',
          'PLEASE_SELECT_IMAGE': 'Please select an image for the event',

          "ABOUT_THIS_EVENT": "About this event",
          "EVENT_DETAILS_LOADING": "Loading event details...",
          "EVENT_NOT_FOUND": "Event not found",
          "EVENT_ALREADY_BOOKED": "You have already booked this event",
          "BOOKING_FAILED": "Failed to book event",
          "USER_NOT_AUTHENTICATED": "User not authenticated",
          "INVALID_EVENT_ID": "Invalid event ID",
          "EVENT_DETAILS_ERROR": "Failed to load event details",
          "EVENT_BOOKINGS": "Bookings",
          "EVENT_CAPACITY_REMAINING": "Remaining Capacity",
          "EVENT_TOTAL_BOOKINGS": "Total Bookings",
          "EVENT_STATUS_AVAILABLE": "Available",
          "EVENT_STATUS_SOLD_OUT": "Sold Out",
          "EVENT_STATUS_CANCELLED": "Cancelled",
          "EVENT_STATUS_PENDING": "Pending",
          "EVENT_STATUS_CONFIRMED": "Confirmed",
          "EVENT_PRICE_CURRENCY": "${{price}}",
          "EVENT_DATE_TIME": "Date & Time",
          "EVENT_LOCATION_LABEL": "Location",
          "EVENT_PRICE_LABEL": "Price",
          "EVENT_CATEGORY_LABEL": "Category",
          "EVENT_DESCRIPTION_LABEL": "Description",
          "EVENT_IMAGE_ALT": "Event Image",
          "EVENT_BOOKING_SECTION": "Booking",
          "EVENT_ADMIN_ACTIONS": "Admin Actions",
          "EVENT_EDIT_BUTTON": "Edit Event",
          "EVENT_DELETE_BUTTON": "Delete Event",
          "EVENT_BOOK_NOW_BUTTON": "Book Now",
          "EVENT_BOOKED_BUTTON": "Booked",
          "EVENT_BOOKING_CONFIRMATION": "Are you sure you want to book this event?",
          "EVENT_BOOKING_SUCCESS": "Event booked successfully",
          "EVENT_BOOKING_ERROR": "Failed to book event",
          "EVENT_BOOKING_UNAUTHORIZED": "Please login to book this event",
          "EVENT_BOOKING_INVALID": "Invalid event ID",
          "EVENT_BOOKING_NOT_FOUND": "Event not found",
          "EVENT_BOOKING_ALREADY_BOOKED": "You have already booked this event",
          "EVENT_BOOKING_SOLD_OUT": "This event is sold out",
          "EVENT_BOOKING_CANCELLED": "This event has been cancelled",
          "EVENT_BOOKING_PENDING": "This event is pending",
          "EVENT_BOOKING_CONFIRMED": "This event is confirmed",
          "EVENT_BOOKING_CAPACITY": "Remaining capacity: {{remaining}} of {{total}}",
          "EVENT_BOOKING_TOTAL": "Total bookings: {{total}}",
          "EVENT_BOOKING_DATE": "Event date: {{date}}",
          "EVENT_BOOKING_TIME": "Event time: {{time}}",
          "EVENT_BOOKING_LOCATION": "Event location: {{location}}",
          "EVENT_BOOKING_PRICE": "Event price: {{price}}",
          "EVENT_BOOKING_CATEGORY": "Event category: {{category}}",
          "EVENT_BOOKING_DESCRIPTION": "Event description: {{description}}",
          "EVENT_BOOKING_IMAGE": "Event image",
          "EVENT_BOOKING_ACTIONS": "Actions",
          "EVENT_BOOKING_EDIT": "Edit",
          "EVENT_BOOKING_DELETE": "Delete",
          "EVENT_BOOKING_VIEW": "View",
          "EVENT_BOOKING_BOOK": "Book",
          "EVENT_BOOKING_CANCEL": "Cancel",
          "EVENT_BOOKING_CONFIRM": "Confirm",
          "EVENT_BOOKING_BACK": "Back",
          "EVENT_BOOKING_NEXT": "Next",
          "EVENT_BOOKING_PREVIOUS": "Previous",
          "EVENT_BOOKING_FIRST": "First",
          "EVENT_BOOKING_LAST": "Last",
          "EVENT_BOOKING_LOADING": "Loading...",
          "EVENT_BOOKING_ERROR": "Error",
          "EVENT_BOOKING_SUCCESS": "Success",
          "EVENT_BOOKING_WARNING": "Warning",
          "EVENT_BOOKING_INFO": "Information",
          "EVENT_BOOKING_CONFIRM": "Confirm",
          "EVENT_BOOKING_ARE_YOU_SURE": "Are you sure?",
          "EVENT_BOOKING_YES": "Yes",
          "EVENT_BOOKING_NO": "No",
          "EVENT_BOOKING_WELCOME": "Welcome",
          "EVENT_BOOKING_WELCOME_BACK": "Welcome back",
          "EVENT_BOOKING_READY_TO_EXPLORE": "Ready to explore more events?",
          "EVENT_BOOKING_BROWSE_EVENTS": "Browse Events",
          "EVENT_BOOKING_SIGN_UP": "Sign Up",
          "EVENT_BOOKING_DISCOVER_EVENTS": "Discover and book amazing events in your area",
          "EVENT_BOOKING_EASY_BOOKING": "Easy Booking",
          "EVENT_BOOKING_WIDE_SELECTION": "Wide Selection",
          "EVENT_BOOKING_SECURE_PAYMENTS": "Secure Payments",
          "EVENT_BOOKING_BOOK_FAVORITE_EVENTS": "Book your favorite events with just a few clicks",
          "EVENT_BOOKING_CHOOSE_EVENTS": "Choose from a variety of events and categories",
          "EVENT_BOOKING_SAFE_PAYMENT": "Safe and secure payment processing",
          "EVENT_BOOKING_SHOWING_EVENTS": "Showing {{count}} of {{total}} events",
          "EVENT_BOOKING_PAGE_INFO": "Page {{current}} of {{total}}",
        }
      },
      ar: {
        translation: {
          "EVENT_BOOKING": "حجز الفعاليات",
          "EVENTS": "الفعاليات",
          "LOGIN": "تسجيل الدخول",
          "LOGOUT": "تسجيل الخروج",
          "REGISTER": "تسجيل",
          "ADMIN_PANEL": "لوحة الإدارة",
          "MY_BOOKINGS": "حجوزاتي",

          "USERNAME": "اسم المستخدم",
          "EMAIL": "البريد الإلكتروني",
          "PASSWORD": "كلمة المرور",
          "CONFIRM_PASSWORD": "تأكيد كلمة المرور",
          "CREATING_ACCOUNT": "جاري إنشاء الحساب...",
          "REGISTER_BUTTON": "تسجيل",
          "LOGIN_BUTTON": "تسجيل الدخول",
          "PASS_NOT_MATCH": "كلمتا المرور غير متطابقتين",
          "PASS_VALIDATION": "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل، وتحتوي على حرف كبير وصغير ورقم ورمز خاص",
          "FAILED_TO_CREATE_ACCOUNT": "فشل في إنشاء الحساب",
          "FAILED_TO_LOGIN": "فشل تسجيل الدخول",

          "CREATE_EVENT": "إنشاء فعالية",
          "CREATE_NEW_EVENT": "إنشاء فعالية جديدة",
          "EDIT_EVENT": "تعديل الفعالية",
          "DELETE_EVENT": "حذف الفعالية",
          "VIEW_EVENT": "عرض الفعالية",
          "BOOK_EVENT": "حجز الفعالية",
          "EVENT_TITLE": "عنوان الفعالية",
          "EVENT_DESCRIPTION": "الوصف",
          "EVENT_DATE": "التاريخ",
          "EVENT_TIME": "الوقت",
          "EVENT_LOCATION": "الموقع",
          "EVENT_PRICE": "السعر",
          "EVENT_CATEGORY": "الفئة",
          "EVENT_IMAGE": "صورة الفعالية",
          "EVENT_CAPACITY": "السعة",
          "EVENT_STATUS": "الحالة",
          "EVENT_ACTIONS": "الإجراءات",
          "EVENT_DETAILS": "تفاصيل الفعالية",
          "EVENT_BOOKED": "تم الحجز",
          "EVENT_SOLD_OUT": "نفذت التذاكر",
          "EVENT_AVAILABLE": "متاح",
          "EVENT_CANCELLED": "ملغي",
          "EVENT_PENDING": "قيد الانتظار",
          "EVENT_CONFIRMED": "مؤكد",
          "VIEW_DETAILS": "عرض التفاصيل",
          "BOOK_NOW": "احجز الآن",
          "BOOKED": "تم الحجز",
          "EDIT": "تعديل",
          "DELETE": "حذف",
          "SELECT_CATEGORY": "اختر الفئة",
          "CATEGORY_MUSIC": "موسيقى",
          "CATEGORY_SPORTS": "رياضة",
          "CATEGORY_ARTS": "فنون ومسرح",
          "CATEGORY_FOOD": "طعام وشراب",
          "CATEGORY_BUSINESS": "أعمال",
          "CATEGORY_TECHNOLOGY": "تكنولوجيا",
          "UPDATE_EVENT": "تحديث الفعالية",
          "UPDATING_EVENT": "جاري تحديث الفعالية...",
          "EVENT_UPDATED": "تم تحديث الفعالية بنجاح",
          "EVENT_DELETED": "تم حذف الفعالية بنجاح",

          "SUBMIT": "إرسال",
          "CANCEL": "إلغاء",
          "SAVE": "حفظ",
          "BACK": "رجوع",
          "NEXT": "التالي",
          "PREVIOUS": "السابق",
          "FIRST": "الأول",
          "LAST": "الأخير",
          "LOADING": "جاري التحميل...",
          "ERROR": "خطأ",
          "SUCCESS": "نجاح",
          "WARNING": "تحذير",
          "INFO": "معلومات",
          "CONFIRM": "تأكيد",
          "ARE_YOU_SURE": "هل أنت متأكد؟",
          "YES": "نعم",
          "NO": "لا",
          "WELCOME": "مرحباً",
          "WELCOME_BACK": "مرحباً بعودتك",
          "READY_TO_EXPLORE": "هل أنت مستعد لاستكشاف المزيد من الفعاليات؟",
          "BROWSE_EVENTS": "تصفح الفعاليات",
          "SIGN_UP": "إنشاء حساب",
          "DISCOVER_EVENTS": "اكتشف واحجز فعاليات رائعة في منطقتك",
          "EASY_BOOKING": "حجز سهل",
          "WIDE_SELECTION": "اختيار واسع",
          "SECURE_PAYMENTS": "مدفوعات آمنة",
          "BOOK_FAVORITE_EVENTS": "احجز فعالياتك المفضلة بنقرة واحدة",
          "CHOOSE_EVENTS": "اختر من مجموعة متنوعة من الفعاليات والفئات",
          "SAFE_PAYMENT": "معالجة آمنة للمدفوعات",
          "SHOWING_EVENTS": "عرض {{count}} من {{total}} فعالية",
          "PAGE_INFO": "الصفحة {{current}} من {{total}}",

          "PREVIEW": "معاينة",
          
          "ENTER_EVENT_NAME": "أدخل اسم الفعالية",
          "ENTER_EVENT_DESCRIPTION": "أدخل وصف الفعالية",
          "ENTER_EVENT_LOCATION": "أدخل موقع الفعالية",
          "ENTER_EVENT_PRICE": "أدخل سعر الفعالية",
          
          "CREATE_EVENT": "إنشاء فعالية",
          "EDIT_EVENT": "تعديل الفعالية",
          "UPDATE_EVENT": "تحديث الفعالية",
          
          "CREATING_EVENT": "جاري إنشاء الفعالية...",
          
          "CREATE_NEW_EVENT": "إنشاء فعالية جديدة",
          "FILL_EVENT_DETAILS": "املأ التفاصيل لإنشاء فعالية جديدة",
          "UPDATE_EVENT_DETAILS": "قم بتحديث تفاصيل الفعالية أدناه",
          
          "CATEGORY_MUSIC": "موسيقى",
          "CATEGORY_SPORTS": "رياضة",
          "CATEGORY_ARTS_&_THEATER": "فنون ومسرح",
          "CATEGORY_FOOD_&_DRINK": "طعام وشراب",
          "CATEGORY_BUSINESS": "أعمال",
          "CATEGORY_TECHNOLOGY": "تكنولوجيا",
          "CATEGORY_HEALTH_&_WELLNESS": "صحة ولياقة",
          "CATEGORY_FAMILY": "عائلة",

          'ADMIN_PANEL_TITLE': 'لوحة الإدارة',
          'CREATE_NEW_EVENT': 'إنشاء فعالية جديدة',
          'EVENT_NAME': 'اسم الفعالية',
          'EVENT_CATEGORY': 'الفئة',
          'EVENT_DATE': 'التاريخ',
          'EVENT_LOCATION': 'الموقع',
          'EVENT_PRICE': 'السعر',
          'EVENT_ACTIONS': 'الإجراءات',
          'IMAGE_REQUIRED': 'الصورة مطلوبة للفعاليات الجديدة',
          'FAILED_TO_LOAD_EVENTS': 'فشل في تحميل الفعاليات',
          'FAILED_TO_DELETE_EVENT': 'فشل في حذف الفعالية',
          'FAILED_TO_SAVE_EVENT': 'فشل في حفظ الفعالية',
          'AUTHENTICATION_REQUIRED': 'مطلوب تسجيل الدخول',
          'EVENT_NOT_FOUND': 'الفعالية غير موجودة',
          'INVALID_EVENT_ID': 'معرف الفعالية غير صالح',
          'PLEASE_SELECT_IMAGE': 'الرجاء اختيار صورة للفعالية',

          "ABOUT_THIS_EVENT": "عن هذه الفعالية",
          "EVENT_DETAILS_LOADING": "جاري تحميل تفاصيل الفعالية...",
          "EVENT_NOT_FOUND": "الفعالية غير موجودة",
          "EVENT_ALREADY_BOOKED": "لقد قمت بحجز هذه الفعالية بالفعل",
          "BOOKING_FAILED": "فشل حجز الفعالية",
          "USER_NOT_AUTHENTICATED": "المستخدم غير مسجل الدخول",
          "INVALID_EVENT_ID": "معرف الفعالية غير صالح",
          "EVENT_DETAILS_ERROR": "فشل تحميل تفاصيل الفعالية",
          "EVENT_BOOKINGS": "الحجوزات",
          "EVENT_CAPACITY_REMAINING": "السعة المتبقية",
          "EVENT_TOTAL_BOOKINGS": "إجمالي الحجوزات",
          "EVENT_STATUS_AVAILABLE": "متاح",
          "EVENT_STATUS_SOLD_OUT": "نفذت التذاكر",
          "EVENT_STATUS_CANCELLED": "ملغي",
          "EVENT_STATUS_PENDING": "قيد الانتظار",
          "EVENT_STATUS_CONFIRMED": "مؤكد",
          "EVENT_PRICE_CURRENCY": "{{price}} $",
          "EVENT_DATE_TIME": "التاريخ والوقت",
          "EVENT_LOCATION_LABEL": "الموقع",
          "EVENT_PRICE_LABEL": "السعر",
          "EVENT_CATEGORY_LABEL": "الفئة",
          "EVENT_DESCRIPTION_LABEL": "الوصف",
          "EVENT_IMAGE_ALT": "صورة الفعالية",
          "EVENT_BOOKING_SECTION": "الحجز",
          "EVENT_ADMIN_ACTIONS": "إجراءات الإدارة",
          "EVENT_EDIT_BUTTON": "تعديل الفعالية",
          "EVENT_DELETE_BUTTON": "حذف الفعالية",
          "EVENT_BOOK_NOW_BUTTON": "احجز الآن",
          "EVENT_BOOKED_BUTTON": "تم الحجز",
          "EVENT_BOOKING_CONFIRMATION": "هل أنت متأكد من حجز هذه الفعالية؟",
          "EVENT_BOOKING_SUCCESS": "تم حجز الفعالية بنجاح",
          "EVENT_BOOKING_ERROR": "فشل حجز الفعالية",
          "EVENT_BOOKING_UNAUTHORIZED": "يرجى تسجيل الدخول لحجز هذه الفعالية",
          "EVENT_BOOKING_INVALID": "معرف الفعالية غير صالح",
          "EVENT_BOOKING_NOT_FOUND": "الفعالية غير موجودة",
          "EVENT_BOOKING_ALREADY_BOOKED": "لقد قمت بحجز هذه الفعالية بالفعل",
          "EVENT_BOOKING_SOLD_OUT": "نفذت تذاكر هذه الفعالية",
          "EVENT_BOOKING_CANCELLED": "تم إلغاء هذه الفعالية",
          "EVENT_BOOKING_PENDING": "هذه الفعالية قيد الانتظار",
          "EVENT_BOOKING_CONFIRMED": "تم تأكيد هذه الفعالية",
          "EVENT_BOOKING_CAPACITY": "السعة المتبقية: {{remaining}} من {{total}}",
          "EVENT_BOOKING_TOTAL": "إجمالي الحجوزات: {{total}}",
          "EVENT_BOOKING_DATE": "تاريخ الفعالية: {{date}}",
          "EVENT_BOOKING_TIME": "وقت الفعالية: {{time}}",
          "EVENT_BOOKING_LOCATION": "موقع الفعالية: {{location}}",
          "EVENT_BOOKING_PRICE": "سعر الفعالية: {{price}}",
          "EVENT_BOOKING_CATEGORY": "فئة الفعالية: {{category}}",
          "EVENT_BOOKING_DESCRIPTION": "وصف الفعالية: {{description}}",
          "EVENT_BOOKING_IMAGE": "صورة الفعالية",
          "EVENT_BOOKING_ACTIONS": "الإجراءات",
          "EVENT_BOOKING_EDIT": "تعديل",
          "EVENT_BOOKING_DELETE": "حذف",
          "EVENT_BOOKING_VIEW": "عرض",
          "EVENT_BOOKING_BOOK": "حجز",
          "EVENT_BOOKING_CANCEL": "إلغاء",
          "EVENT_BOOKING_CONFIRM": "تأكيد",
          "EVENT_BOOKING_BACK": "رجوع",
          "EVENT_BOOKING_NEXT": "التالي",
          "EVENT_BOOKING_PREVIOUS": "السابق",
          "EVENT_BOOKING_FIRST": "الأول",
          "EVENT_BOOKING_LAST": "الأخير",
          "EVENT_BOOKING_LOADING": "جاري التحميل...",
          "EVENT_BOOKING_ERROR": "خطأ",
          "EVENT_BOOKING_SUCCESS": "نجاح",
          "EVENT_BOOKING_WARNING": "تحذير",
          "EVENT_BOOKING_INFO": "معلومات",
          "EVENT_BOOKING_CONFIRM": "تأكيد",
          "EVENT_BOOKING_ARE_YOU_SURE": "هل أنت متأكد؟",
          "EVENT_BOOKING_YES": "نعم",
          "EVENT_BOOKING_NO": "لا",
          "EVENT_BOOKING_WELCOME": "مرحباً",
          "EVENT_BOOKING_WELCOME_BACK": "مرحباً بعودتك",
          "EVENT_BOOKING_READY_TO_EXPLORE": "هل أنت مستعد لاستكشاف المزيد من الفعاليات؟",
          "EVENT_BOOKING_BROWSE_EVENTS": "تصفح الفعاليات",
          "EVENT_BOOKING_SIGN_UP": "إنشاء حساب",
          "EVENT_BOOKING_DISCOVER_EVENTS": "اكتشف واحجز فعاليات رائعة في منطقتك",
          "EVENT_BOOKING_EASY_BOOKING": "حجز سهل",
          "EVENT_BOOKING_WIDE_SELECTION": "اختيار واسع",
          "EVENT_BOOKING_SECURE_PAYMENTS": "مدفوعات آمنة",
          "EVENT_BOOKING_BOOK_FAVORITE_EVENTS": "احجز فعالياتك المفضلة بنقرة واحدة",
          "EVENT_BOOKING_CHOOSE_EVENTS": "اختر من مجموعة متنوعة من الفعاليات والفئات",
          "EVENT_BOOKING_SAFE_PAYMENT": "معالجة آمنة للمدفوعات",
          "EVENT_BOOKING_SHOWING_EVENTS": "عرض {{count}} من {{total}} فعالية",
          "EVENT_BOOKING_PAGE_INFO": "الصفحة {{current}} من {{total}}",
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 