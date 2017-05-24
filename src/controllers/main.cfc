component name="main" output="false" accessors = true{
	property beanFactory;

	public void function default(struct rc = {}) {
		param name="rc.skeletonType" default="Basic FW/1 Skeleton";
		rc.message = this.getBeanFactory().getBean("messageService").getMessage();
	}

	public void function view1(struct rc={}) {

	}
}